export default function Nav() {
  return (
    <div className="w-full h-[80px] flex justify-center border border-b-[1px]">
      {/* 최대 1440px를 유지하기 위한 영역 */}
      {/* 메뉴바 */}
      <div className="max-w-7xl w-full h-full flex justify-between items-center">
        {/* 로고 영역 */}
        <div className="font-black">카카오톡</div>
        {/* 메뉴 영역 */}
        <div className="flex space-x-12 text-sm font-bold">
          <div>카톡안녕가이드</div>
          <div>카톡설명서</div>
          <div>다운로드</div>
        </div>
      </div>
    </div>
  );
}
