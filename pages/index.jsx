// ✅ pages/index.jsx (루트 경로 → /recommendation 리디렉트)
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/recommendation");
  }, [router]);

  return null; // 화면에 아무것도 표시하지 않음
}
