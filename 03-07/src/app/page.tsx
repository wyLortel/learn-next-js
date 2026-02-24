"use client";
export default function Page() {
  // eslint-disable-next-line react-hooks/purity
  const randomNumber = Math.floor(Math.random() * 10) + 1; // 1 - 10
  console.log(randomNumber);
  return (
    <>
      <h1>Page:{randomNumber}</h1>
    </>
  );
}
