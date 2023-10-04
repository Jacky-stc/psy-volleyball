"use client";
export default async function getPhotoList() {
  const result = await fetch("http://localhost:3000/api/photo");
  if (result.ok) {
    return result.json();
  }
  return [];
}
