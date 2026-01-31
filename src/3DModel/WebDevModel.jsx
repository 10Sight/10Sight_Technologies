import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

/* ===================== MONITOR ===================== */
const Monitor = () => {
    const screenMat = useRef()
    const glowRef = useRef()

    useFrame(({ clock }) => {
        const t = clock.elapsedTime
        if (screenMat.current) {
            screenMat.current.emissiveIntensity =
                0.45 + Math.sin(t * 1.5) * 0.05
        }
        if (glowRef.current) {
            glowRef.current.material.opacity =
                0.08 + Math.sin(t * 1.2) * 0.02
        }
    })

    return (
        <group position={[0, -0.5, 0]}>
            {/* ===== Stand Base ===== */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[1.3, 0.12, 0.9]} />
                <meshStandardMaterial
                    color="#161616"
                    roughness={0.65}
                    metalness={0.35}
                />
            </mesh>

            {/* ===== Stand Neck ===== */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.1, 0.14, 1.4, 32]} />
                <meshStandardMaterial
                    color="#1b1b1b"
                    roughness={0.55}
                    metalness={0.45}
                />
            </mesh>

            {/* ===== Bezel ===== */}
            <RoundedBox
                args={[3.25, 2.05, 0.18]}
                radius={0.14}
                smoothness={6}
                position={[0, 0.8, 0]}
            >
                <meshPhysicalMaterial
                    color="#0b0b0d"
                    roughness={0.35}
                    metalness={0.55}
                    clearcoat={0.9}
                    clearcoatRoughness={0.15}
                />
            </RoundedBox>

            {/* ===== Screen Emissive ===== */}
            <mesh position={[0, 0.8, 0.095]}>
                <planeGeometry args={[3, 1.8]} />
                <meshStandardMaterial
                    ref={screenMat}
                    color="#020617"
                    emissive="#4f46e5"
                    emissiveIntensity={0.45}
                    toneMapped={false}
                />
            </mesh>

            {/* ===== Screen Glass Layer ===== */}
            <mesh position={[0, 0.8, 0.105]}>
                <planeGeometry args={[3.02, 1.82]} />
                <meshPhysicalMaterial
                    transmission={0.9}
                    roughness={0.05}
                    thickness={0.3}
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* ===== Screen Glow Spill ===== */}
            <mesh ref={glowRef} position={[0, 0.8, 0.07]}>
                <planeGeometry args={[3.2, 2]} />
                <meshBasicMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.08}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* ===== UI Layers (Depth Added) ===== */}
            <group position={[0, 0.8, 0.12]}>
                <mesh position={[-0.8, 0.4, 0]}>
                    <planeGeometry args={[1.0, 0.6]} />
                    <meshBasicMaterial color="#1e1e2e" />
                </mesh>

                <mesh position={[0.5, 0, 0.01]}>
                    <planeGeometry args={[1.4, 1.2]} />
                    <meshBasicMaterial color="#111827" />
                </mesh>

                <mesh position={[0, -0.6, 0.02]}>
                    <planeGeometry args={[2.5, 0.1]} />
                    <meshBasicMaterial color="#1f2933" />
                </mesh>

                <mesh position={[-0.5, -0.6, 0.03]}>
                    <planeGeometry args={[1.5, 0.1]} />
                    <meshBasicMaterial color="#4f46e5" />
                </mesh>
            </group>
        </group>
    )
}

/* ===================== DESK ===================== */
const DeskAccessories = () => {
    return (
        <group position={[0, -1.55, 1.6]} rotation={[-0.5, 0, 0]}>
            {/* Keyboard */}
            <RoundedBox args={[1.9, 0.12, 0.65]} radius={0.06} smoothness={4}>
                <meshStandardMaterial
                    color="#262626"
                    roughness={0.7}
                    metalness={0.15}
                />
            </RoundedBox>

            {/* Mouse */}
            <group position={[1.3, 0, 0.55]}>
                <RoundedBox args={[0.35, 0.18, 0.55]} radius={0.12} smoothness={4}>
                    <meshStandardMaterial
                        color="#262626"
                        roughness={0.6}
                        metalness={0.2}
                    />
                </RoundedBox>
            </group>

            {/* Mug */}
            <group position={[-1.6, 0.25, 0.25]}>
                <Cylinder args={[0.22, 0.18, 0.55, 32]}>
                    <meshStandardMaterial
                        color="#fafafa"
                        roughness={0.25}
                        metalness={0.05}
                    />
                </Cylinder>
            </group>
        </group>
    )
}

/* ===================== FLOATING CARD ===================== */
const FloatingCard = ({ position, color, delay }) => {
    const ref = useRef()

    useFrame(({ clock }) => {
        const t = clock.elapsedTime + delay
        if (!ref.current) return
        ref.current.position.y = position[1] + Math.sin(t) * 0.1
        ref.current.position.z = position[2] - Math.abs(Math.sin(t * 0.4)) * 0.18
        ref.current.rotation.y = Math.sin(t * 0.3) * 0.15
    })

    return (
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.5}>
            <group ref={ref} position={position}>
                <RoundedBox args={[0.65, 0.45, 0.06]} radius={0.06} smoothness={4}>
                    <meshPhysicalMaterial
                        color={color}
                        roughness={0.2}
                        clearcoat={1}
                        transmission={0.2}
                        transparent
                        opacity={0.9}
                    />
                </RoundedBox>

                {/* Icon */}
                <mesh position={[0, 0, 0.035]}>
                    <boxGeometry args={[0.22, 0.22, 0.01]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </group>
        </Float>
    )
}

/* ===================== MAIN ===================== */
const WebDevModel = () => {
    return (
        <group scale={0.72} position={[0, 0.5, 0]}>
            <Monitor />
            <DeskAccessories />

            {/* Floating Touchpoints */}
            <FloatingCard position={[-1.6, 0.1, 0.6]} color="#22c55e" delay={0} />
            <FloatingCard position={[-1.3, 1.6, 0]} color="#ec4899" delay={1} />
            <FloatingCard position={[1.6, 1.3, 0.2]} color="#3b82f6" delay={2} />
            <FloatingCard position={[1.3, -0.6, 0.9]} color="#e5e7eb" delay={3} />
        </group>
    )
}

export default WebDevModel
