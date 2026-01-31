import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows } from '@react-three/drei';
import AndroidModel from '../3DModel/AndroidModel';
import WebDevModel from '../3DModel/WebDevModel';
import AiMlModel from '../3DModel/AiMlModel';
import DataAnalystModel from '../3DModel/DataAnalystModel';
import SocialMediaModel from '../3DModel/SocialMediaModel';
import CustomSoftwareModel from '../3DModel/CustomSoftwareModel';

const ThreeScene = ({ modelType = 'android' }) => {

    // Determine light color based on model
    const getRimColor = () => {
        switch (modelType) {
            case 'web': return '#4f46e5'; // Indigo
            case 'ai': return '#a78bfa';  // Violet
            case 'data': return '#06b6d4'; // Cyan
            case 'social': return '#db2777'; // Pink
            case 'custom': return '#6366f1'; // Indigo
            default: return '#88ffaa';    // Green
        }
    }

    // Mobile detection for rotation disable
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="w-full h-full bg-transparent">
            <Canvas camera={{ position: [3.5, 2.2, 6], fov: 38 }}>
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} castShadow color="#ffffff" />

                {/* Rim Light - Color changes based on model */}
                <spotLight
                    position={[-5, 5, -5]}
                    intensity={3}
                    color={getRimColor()}
                    angle={0.5}
                    penumbra={1}
                />

                <Environment preset="city" />

                <Suspense fallback={null}>
                    {modelType === 'web' && (
                        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[0, 0.1]}>
                            <WebDevModel />
                        </Float>
                    )}
                    {modelType === 'android' && (
                        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[0, 0.3]}>
                            <AndroidModel />
                        </Float>
                    )}
                    {modelType === 'ai' && (
                        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[0, 0.2]}>
                            <AiMlModel />
                        </Float>
                    )}
                    {modelType === 'data' && (
                        <DataAnalystModel />
                    )}
                    {modelType === 'social' && (
                        <SocialMediaModel />
                    )}
                    {modelType === 'custom' && (
                        <CustomSoftwareModel />
                    )}
                </Suspense>

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={!isMobile}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
