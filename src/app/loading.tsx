"use client";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function Loading() {
  return (
    <Skeleton
      width={100}
      height={200}
      baseColor="#18191A"
      highlightColor="#404040"
      count={3}
    />
  ); // Five-line loading skeleton
  // return <div>loading...</div>; // Five-line loading skeleton
}
