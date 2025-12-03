# Antigravity로 빌드한 Vibe Quotes App (바이브 코딩 명언 앱)

구글의 바이브코딩 도구 - 안티그래비티로 기획 및 빌드한 바이브코딩 입문자용 "오늘의 명언" 웹 애플리케이션입니다.
코딩과 몰입(Flow)에 관한 영감을 주는 명언들을 현대적이고 감각적인 "Vibe" 디자인으로 제공합니다.
JUN.VIBE & Antigravity / 25.12.03

## ✨ 주요 기능 (Features)

*   **오늘의 명언 (Daily Vibe)**: 코딩, 몰입, 성장에 관한 엄선된 명언을 보여줍니다.
*   **새로운 바이브 (New Vibe)**: 버튼을 클릭하여 새로운 명언을 랜덤하게 확인할 수 있습니다.
*   **복사하기 (Copy Vibe)**: 마음에 드는 명언을 클립보드에 쉽게 복사할 수 있습니다.
*   **감각적인 디자인 (Vibe Design)**:
    *   네온(Neon) 글로우 효과
    *   글래스모피즘(Glassmorphism) 카드 스타일
    *   반응형 디자인 (모바일/데스크탑 지원)

## 🛠 기술 스택 (Tech Stack)

*   **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox, Glassmorphism)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: GitHub Pages / Vercel (Ready)

## 🚀 시작하기 (Getting Started)

### 설치 및 실행

1.  리포지토리 클론:
    ```bash
    git clone https://github.com/junsang-dong/vibe-1202-antigravity-first.git
    cd vibe-1202-antigravity-first
    ```

2.  의존성 설치:
    ```bash
    npm install
    ```

3.  개발 서버 실행:
    ```bash
    npm run dev
    ```

4.  빌드:
    ```bash
    npm run build
    ```

## 📂 프로젝트 구조 (Structure)

```
src/
├── components/
│   └── QuoteCard.jsx  # 명언 표시 카드 컴포넌트
├── data/
│   └── quotes.js      # 명언 데이터 리스트
├── App.jsx            # 메인 애플리케이션 컴포넌트
├── index.css          # 전역 스타일 및 테마 정의
└── main.jsx           # 진입점
```

## 📝 라이선스 (License)

This project is open source and available under the [MIT License](LICENSE).
