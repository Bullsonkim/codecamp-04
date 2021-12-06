import { useRouter } from "next/router";

export function useMoveToPage() {
  const router = useRouter();

  const useMoveToPage = (page) => () => {
    router.push(page);
  };

  return {
    useMoveToPage,
  };
}
