"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

interface Arc {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

interface GlobeConfig {
  pointSize: number
  globeColor: string
  showAtmosphere: boolean
  atmosphereColor: string
  atmosphereAltitude: number
  emissive: string
  emissiveIntensity: number
  shininess: number
  polygonColor: string
  ambientLight: string
  directionalLeftLight: string
  directionalTopLight: string
  pointLight: string
  arcTime: number
  arcLength: number
  rings: number
  maxRings: number
  initialPosition: { lat: number; lng: number }
  autoRotate: boolean
  autoRotateSpeed: number
}

interface WorldProps {
  data: Arc[]
  globeConfig: GlobeConfig
}

export function World({ data, globeConfig }: WorldProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const globeRef = useRef<THREE.Mesh>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 300

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.autoRotate = globeConfig.autoRotate
    controls.autoRotateSpeed = globeConfig.autoRotateSpeed

    // Globe geometry
    const globeGeometry = new THREE.SphereGeometry(100, 64, 64)
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: globeConfig.globeColor,
      emissive: globeConfig.emissive,
      emissiveIntensity: globeConfig.emissiveIntensity,
      shininess: globeConfig.shininess,
      transparent: true,
      opacity: 0.9,
    })

    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    globeRef.current = globe
    scene.add(globe)

    // Atmosphere
    if (globeConfig.showAtmosphere) {
      const atmosphereGeometry = new THREE.SphereGeometry(100 + globeConfig.atmosphereAltitude * 100, 64, 64)
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: globeConfig.atmosphereColor,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide,
      })
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
      scene.add(atmosphere)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(globeConfig.ambientLight, 0.6)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(globeConfig.directionalLeftLight, 0.8)
    directionalLight1.position.set(-200, 500, 200)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(globeConfig.directionalTopLight, 0.8)
    directionalLight2.position.set(200, 500, -200)
    scene.add(directionalLight2)

    // Add arcs
    data.forEach((arc) => {
      const startCoords = latLngToVector3(arc.startLat, arc.startLng, 100)
      const endCoords = latLngToVector3(arc.endLat, arc.endLng, 100)

      const arcGeometry = createArcGeometry(startCoords, endCoords, arc.arcAlt)
      const arcMaterial = new THREE.LineBasicMaterial({
        color: arc.color,
        transparent: true,
        opacity: 0.8,
      })

      const arcLine = new THREE.Line(arcGeometry, arcMaterial)
      scene.add(arcLine)
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [data, globeConfig])

  return <div ref={mountRef} className="w-full h-full" />
}

// Helper functions
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return new THREE.Vector3(x, y, z)
}

function createArcGeometry(start: THREE.Vector3, end: THREE.Vector3, arcAlt: number) {
  const distance = start.distanceTo(end)
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
  mid.normalize().multiplyScalar(100 + arcAlt * 100)

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
  const points = curve.getPoints(50)

  return new THREE.BufferGeometry().setFromPoints(points)
}
