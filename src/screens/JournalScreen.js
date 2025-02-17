import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { Html } from "@react-three/drei";
import { useNavigation } from '@react-navigation/native'; // Importujeme navigaci

const DiaryPage = ({ position, rotation, onClick, content, setContent }) => {
  const [isEditing, setEditing] = useState(false);
  const navigation = useNavigation();

  return (
    <a.mesh position={position} rotation={rotation} onClick={onClick}>
      <planeGeometry args={[5, 7]} />
      <meshStandardMaterial color="#fff4e6" />
      <Html center>
        {isEditing ? (
          <textarea
            style={{
              width: "80%",
              height: "80%",
              background: "transparent",
              border: "none",
              fontSize: "16px",
              color: "#000",
            }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => setEditing(false)}
          />
        ) : (
          <div
            style={{ cursor: "pointer", fontSize: "16px", color: "#000" }}
            onClick={() => setEditing(true)}
          >
            {content || "Klikni pro zápis..."}
          </div>
        )}
      </Html>
    </a.mesh>
  );
};

const DiaryScreen = () => {
  const [content, setContent] = useState("");
  const [flip, setFlip] = useState(false);

  const { rotation } = useSpring({
    rotation: flip ? [0, Math.PI, 0] : [0, 0, 0],
    config: { tension: 300, friction: 20 },
  });

  return (
    <Canvas>
      <ambientLight />
      <DiaryPage
        position={[0, 0, 0]}
        rotation={rotation}
        onClick={() => setFlip(!flip)}
        content={content}
        setContent={setContent}
      />
    </Canvas>
  );
};

export default DiaryScreen;
