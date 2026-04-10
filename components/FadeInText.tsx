// FadeInText.tsx
import React, { useEffect, useRef } from "react";
import { Animated, Text, TextStyle } from "react-native";

// Criando um Text animado estável
const AnimatedText = Animated.createAnimatedComponent(Text);

type FadeInTextProps = {
  children: React.ReactNode;
  style?: TextStyle;
  duration?: number;
};

export default function FadeInText({ children, style, duration = 800 }: FadeInTextProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <AnimatedText style={[style, { opacity: fadeAnim }]}>
      {children}
    </AnimatedText>
  );
}
