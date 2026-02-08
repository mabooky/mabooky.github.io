import { Card, Tooltip } from "@mabooky/tailored-m3";
import Image from "next/image";
import ThemeSelector from "./ThemeSelector";

const WRITINGS_AND_WORKS = [
  {
    id: 1,
    type: "Article",
    imageSrc: "/Gemini_Generated_Image_qqc4j2qqc4j2qqc4.png",
    title: "Next.js 서버 컴포넌트의 이해",
    date: "2026-01-15",
    description: "서버 사이드 렌더링의 패러다임 변화와 RSC가 가져오는 성능상의 이점 심층 분석."
  },
  {
    id: 2,
    type: "Work",
    imageSrc: "/Gemini_Generated_Image_tdmq1ktdmq1ktdmq.png",
    title: "Anything Beats Anything",
    date: "2026-01-28",
    description: "'What Beats Rock'에서 영감을 얻은 게임. 상상하는 모든 단어 사이의 상성을 AI로 판단하는 인터랙티브 웹 앱."
  },
  {
    id: 3,
    type: "Article",
    title: "MD3 기반의 다크모드 전략",
    date: "2026-01-18",
    description: "디자인 시스템에서 색상 대비와 사용자 가독성을 모두 잡는 다크모드 토큰 설계 방법."
  },
  {
    id: 4,
    type: "Article",
    title: "Tailwind JIT 엔진 활용 팁",
    date: "2026-01-20",
    description: "개발 속도를 획기적으로 높여주는 Tailwind CSS의 실시간 컴파일 기능과 커스텀 설정."
  },
  {
    id: 5,
    type: "Work",
    title: "Logic Flow Visualizer",
    date: "2026-01-31",
    description: "복잡한 조건부 로직을 드래그 앤 드롭으로 연결하여 시각적으로 검증할 수 있는 캔버스 기반 툴."
  },
  {
    id: 6,
    type: "Article",
    imageSrc: "/Gemini_Generated_Image_py3sl7py3sl7py3s.png",
    title: "웹 접근성과 ARIA 가이드라인",
    date: "2026-01-22",
    description: "스크린 리더 사용자를 고려한 시맨틱 마크업과 접근성(A11y) 향상을 위한 실무 체크리스트."
  },
  {
    id: 7,
    type: "Article",
    title: "React Query로 상태 관리 최적화",
    date: "2026-01-25",
    description: "복잡한 서버 상태를 효율적으로 캐싱하고 동기화하여 클라이언트 로직을 단순화하기."
  },
];

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 h-64 z-20 flex justify-between items-center p-24 bg-surface-container">
        <h3 className="typescale-emphasized-headline-small text-primary select-none">Dev Log</h3>
        <ThemeSelector />
      </header>
      <main className="flex-1 p-24 bg-surface">
        <section className="mt-48">
          <h1 className="typescale-emphasized-display-large text-primary">
            "코드는 한 번 작성되지만,<br/>읽히는 것은 열 번이다."
          </h1>
          <p className="typescale-body-medium text-on-surface mt-24">
            안녕하세요. 아름답고 간결한 코드를 지향하는 개발자 mabooky입니다.<br/>
            이 공간은 제가 경험한 개발 여정과 지식을 나누는 곳입니다.<br/>
            <br/>
            이메일: mabookyggl@gmail.com<br/>
            GitHub: mabooky(WF Gray Ice Tea)
          </p>
        </section>
        <section className="mt-48">
          <h5 className="typescale-emphasized-title-small text-primary">Writings & Works</h5>
          <ul className="grid grid-cols-3 gap-8">
            {WRITINGS_AND_WORKS.map((item, index) => (
              <li key={index} className="typescale-body-medium text-on-surface">
                <Card
                  variant="outlined"
                  className="mt-8 cursor-pointer">
                  {
                    item.imageSrc &&
                    <Image
                      className="w-full h-128 rounded-md object-cover"
                      width={512}
                      height={512}
                      src={item.imageSrc ?? ''}
                      alt=""/>
                  }
                  <div
                    className="flex flex-col p-16 text-start">  
                    <p className="typescale-title-medium text-on-surface line-clamp-1">{item.title}</p>
                    <p className="typescale-label-small text-on-surface">{item.date}</p>
                    <p className="mt-16 typescale-body-small text-on-surface line-clamp-2">{item.description}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}