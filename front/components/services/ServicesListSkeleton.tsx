import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { DimensionValue, ScrollView, View, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

// Skeleton Components
export default function CategorySkeleton() {
    return (
      <View style={{ gap: 4 }}>
        <SkeletonBox width={150} height={20} borderRadius={4} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 15 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBox key={index} width={100} height={40} borderRadius={20} style={{ marginRight: 8 }} />
          ))}
        </ScrollView>
      </View>
    );
  }
  
  export function CompanySkeleton() {
    return <SkeletonBox width={100} height={40} borderRadius={20} style={{ marginRight: 8 }} />;
  }
  
  type SkeletonBoxProps = ViewProps & {
    width?: DimensionValue;
    height?: DimensionValue;
    borderRadius?: number;
  };
  
  function SkeletonBox({ width, height, borderRadius, style }:SkeletonBoxProps) {
    const translateX = useSharedValue(-100);
  
    useEffect(() => {
      translateX.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
    }, []);
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));
  
    return (
      <View style={[{ width, height, backgroundColor: '#e0e0e0', borderRadius, overflow: 'hidden' }, style]}>
        <Animated.View style={[animatedStyle]}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.5)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
    );
  }
  