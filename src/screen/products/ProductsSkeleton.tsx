import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { FC } from 'react';
import React from 'react';
const ProductSkeleton:React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        marginTop={20}
              padding={10}
              marginStart={10}
        borderRadius={20}>
        <SkeletonPlaceholder.Item
          width={140}
          height={140}
          borderRadius={10}
          marginRight={20}
        />
        <SkeletonPlaceholder.Item flexShrink={1} flexGrow={1}>
          <SkeletonPlaceholder.Item
            width={180}
            height={24}
            borderRadius={4}
            marginBottom={8}
          />
          <SkeletonPlaceholder.Item
            width={180}
            height={20}
            borderRadius={4}
            marginBottom={8}
          />
          <SkeletonPlaceholder.Item
            width={180}
            height={60}
            borderRadius={4}
            marginBottom={8}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={8}>
            <SkeletonPlaceholder.Item
              width={40}
              height={20}
              borderRadius={4}
              marginRight={10}
            />
            <SkeletonPlaceholder.Item width={80} height={20} borderRadius={4} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={100}
            height={40}
            borderRadius={4}
            justifyContent="center"
            alignItems="center"
            marginTop={12}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ProductSkeleton;