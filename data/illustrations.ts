export type IllustrationVariant =
  | "hero"
  | "intro"
  | "human"
  | "culture"
  | "ethics"
  | "practice"
  | "conclusion";

export type IllustrationSection =
  | "hero"
  | "intro"
  | "human"
  | "culture"
  | "ethics"
  | "practice"
  | "conclusion";

export type IllustrationIconName =
  | "BookOpen"
  | "Mic2"
  | "User"
  | "Heart"
  | "Users"
  | "Sprout"
  | "Flame"
  | "Scale"
  | "ShieldCheck"
  | "Sparkles"
  | "Globe2"
  | "TrendingUp"
  | "TrendingDown"
  | "Landmark"
  | "AlertTriangle"
  | "DollarSign"
  | "ShieldAlert";

export type IllustrationMeta = {
  id: string;
  imageSrc?: string;
  title: string;
  description: string;
  prompt: string;
  variant: IllustrationVariant;
  icon: IllustrationIconName;
  section: IllustrationSection;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

export const illustrations: Record<string, IllustrationMeta> = {
  hero: {
    id: "hero",
    imageSrc: "/images/trien-lam2.jpg",
    title: "Thành tựu và kinh nghiệm đổi mới",
    description: "Hình ảnh triển lãm về thành tựu đổi mới và xây dựng Đảng.",
    prompt:
      "Elegant Vietnamese educational illustration, an open book glowing with warm golden light, white lotus flowers, subtle Vietnam map outline in the background, faint Dong Son drum pattern, burgundy and gold color palette, soft cinematic lighting, clean composition, premium presentation style, no text, no watermark.",
    variant: "hero",
    icon: "BookOpen",
    section: "hero",
  },
  intro: {
    id: "intro",
    imageSrc: "/images/mo-dau-doi-moi.jpg",
    title: "Thành tựu đổi mới",
    description:
      "Đường chân trời TP. Hồ Chí Minh — biểu tượng thành tựu to lớn, có ý nghĩa lịch sử sau hơn 30 năm đổi mới.",
    prompt:
      "Real photo: Ho Chi Minh City skyline at sunset across the Saigon River, Bitexco Financial Tower visible, warm golden light, modern Vietnam urban development.",
    variant: "intro",
    icon: "Mic2",
    section: "intro",
    objectPosition: "center",
  },
  "human-concept": {
    id: "human-concept",
    imageSrc: "/images/thanh-tuu-kinh-te.jpg",
    title: "Thành tựu kinh tế",
    description:
      "Tòa tháp Bitexco, TP. Hồ Chí Minh — hình ảnh tăng trưởng, đô thị hóa và hội nhập kinh tế quốc tế.",
    prompt:
      "Real photo: Bitexco Financial Tower at dusk on the Saigon River waterfront, modern skyscrapers, Vietnam economic growth.",
    variant: "human",
    icon: "TrendingUp",
    section: "human",
    objectPosition: "center top",
  },
  "human-goal": {
    id: "human-goal",
    imageSrc: "/images/thanh-tuu-van-hoa-xa-hoi.jpg",
    title: "Văn hóa - xã hội chuyển biến tích cực",
    description:
      "Ruộng bậc thang Mù Cang Chải — đời sống nông thôn, nông nghiệp và chuyển biến xã hội tích cực.",
    prompt:
      "Real photo: terraced rice fields in Mu Cang Chai, Yen Bai, Vietnam, misty mountains, rural livelihood and countryside development.",
    variant: "human",
    icon: "Heart",
    section: "human",
    objectPosition: "center",
  },
  "human-motive": {
    id: "human-motive",
    imageSrc: "/images/thanh-tuu-quoc-phong-doi-ngoai.jpg",
    title: "Quốc phòng, an ninh, đối ngoại",
    description:
      "Cột cờ Hà Nội với Quốc kỳ — biểu tượng độc lập, chủ quyền và vị thế quốc gia.",
    prompt:
      "Real photo: Flag Tower of Hanoi with Vietnamese national flag against dramatic clouds, sovereignty and national defense symbolism.",
    variant: "human",
    icon: "ShieldCheck",
    section: "human",
    objectPosition: "center top",
  },
  "human-strategy": {
    id: "human-strategy",
    imageSrc: "/images/thanh-tuu-xay-dung-dang.jpg",
    title: "Xây dựng Đảng và Nhà nước pháp quyền",
    description:
      "Nhà Quốc hội Việt Nam (Hà Nội) — biểu tượng Nhà nước pháp quyền và xây dựng thể chế.",
    prompt:
      "Real photo: National Assembly Building of Vietnam in Hanoi with national flag and formal gardens.",
    variant: "human",
    icon: "Landmark",
    section: "human",
    objectPosition: "center",
  },
  culture: {
    id: "culture",
    imageSrc: undefined,
    title: "Hạn chế và nguyên nhân",
    description: "Infographic tổng hợp các hạn chế và nguyên nhân của công cuộc đổi mới.",
    prompt:
      "Modern Vietnamese culture infographic illustration, central human and lotus symbol, four surrounding branches representing holistic human development, healthy cultural environment, political and economic culture, international cultural integration, Dong Son drum pattern, burgundy gold cream palette, no text.",
    variant: "culture",
    icon: "Globe2",
    section: "culture",
  },
  "culture-holistic": {
    id: "culture-holistic",
    imageSrc: "/images/vnr1.jpg",
    title: "Kinh tế chưa bền vững",
    description: "Tăng trưởng chưa tương xứng với tiềm năng, năng suất lao động và năng lực cạnh tranh còn thấp.",
    prompt:
      "Vietnamese educational illustration of holistic human development, reading, creativity, physical wellness, golden light and lotus, burgundy gold cream palette, no text.",
    variant: "culture",
    icon: "Sprout",
    section: "culture",
  },
  "culture-environment": {
    id: "culture-environment",
    imageSrc: "/images/vnr2.jpg",
    title: "Vấn đề xã hội nảy sinh",
    description: "Một bộ phận nhân dân chưa được thụ hưởng công bằng thành quả đổi mới.",
    prompt:
      "Peaceful healthy Vietnamese cultural environment, families, community, festival, lotus pond, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Heart",
    section: "culture",
  },
  "culture-political": {
    id: "culture-political",
    imageSrc: "/images/vnr3.jpg",
    title: "Bốn nguy cơ vẫn hiện hữu",
    description: "Diễn biến hòa bình, tự diễn biến, tự chuyển hóa trong nội bộ vẫn tồn tại và diễn biến phức tạp.",
    prompt:
      "Culture in politics and economy illustration, government and marketplace harmony, balanced scale, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Scale",
    section: "culture",
  },
  "culture-integration": {
    id: "culture-integration",
    imageSrc: "/images/vnr4.png",
    title: "Nguyên nhân khách quan và chủ quan",
    description: "Tính chất phức tạp chưa có tiền lệ của đổi mới và yếu kém trong công tác lãnh đạo, quản lý.",
    prompt:
      "International cultural integration, globe with Vietnam, diverse exchange, lotus and national identity, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Globe2",
    section: "culture",
  },
  ethics: {
    id: "ethics",
    imageSrc: "/images/kinh-nghiem.webp",
    title: "Kinh nghiệm của Đảng",
    description: "Năm bài học kinh nghiệm quý báu qua hơn 30 năm lãnh đạo công cuộc đổi mới.",
    prompt:
      "Elegant moral values illustration, golden compass, balanced scale, protective shield, warm flame of ideals, hands holding a heart, Vietnamese cultural patterns, burgundy and gold, clean academic presentation style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-role": {
    id: "ethics-role",
    imageSrc: "/images/kiendinh.png",
    title: "Kiên định mục tiêu, chủ động sáng tạo",
    description: "Vận dụng sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh phù hợp với điều kiện Việt Nam.",
    prompt:
      "Warm flame of revolutionary ideals and heart symbol, burgundy and gold, respectful Vietnamese educational style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-content": {
    id: "ethics-content",
    imageSrc: "/images/dan-la-goc.jpg",
    title: "Lấy dân làm gốc, đổi mới toàn diện",
    description: "Phát huy sức mạnh đại đoàn kết toàn dân tộc; đổi mới toàn diện, đồng bộ, có bước đi phù hợp.",
    prompt:
      "Four golden virtue symbols representing thrift, integrity, honesty and righteousness, balanced scale, burgundy gold palette, no text.",
    variant: "ethics",
    icon: "Scale",
    section: "ethics",
  },
  "ethics-principles": {
    id: "ethics-principles",
    imageSrc: "/images/image_nguyet.jpg",
    title: "Ba nguyên tắc cốt lõi",
    description: "Độc lập tự chủ gắn hội nhập quốc tế; kết hợp sức mạnh dân tộc với sức mạnh thời đại; tự đổi mới Đảng.",
    prompt:
      "Symbolic path of lifelong moral self-improvement, a clean road leading to warm golden light, lotus flowers along the path, calm Vietnamese educational illustration, no text.",
    variant: "ethics",
    icon: "ShieldCheck",
    section: "ethics",
  },
  practice: {
    id: "practice",
    imageSrc: "/images/phong-chong-tham-nhung.svg",
    title: "Phòng, chống tham nhũng",
    description: "Tham nhũng là 'giặc nội xâm' — đe dọa trực tiếp đến sự tồn vong của Đảng và chế độ.",
    prompt:
      "Vietnamese university students studying in a bright library, helping each other, using laptop and smartphone responsibly, warm academic atmosphere, clean modern illustration, gold and cream tones, no text.",
    variant: "practice",
    icon: "AlertTriangle",
    section: "practice",
    objectFit: "contain",
    objectPosition: "center",
  },
  conclusion: {
    id: "conclusion",
    imageSrc: undefined,
    title: "Kết luận",
    description: "Tổng kết thành tựu, kinh nghiệm đổi mới và vấn đề phòng, chống tham nhũng hiện nay.",
    prompt:
      "Hopeful Vietnamese conclusion illustration, sunrise light over subtle Vietnam map outline, blooming lotus, open book, golden particles, elegant burgundy and cream presentation design, inspiring and respectful, no text, no watermark.",
    variant: "conclusion",
    icon: "Sparkles",
    section: "conclusion",
    objectFit: "contain",
    objectPosition: "center",
  },
};

export function getIllustration(id: string): IllustrationMeta {
  const item = illustrations[id];
  if (!item) {
    throw new Error(`Illustration not found: ${id}`);
  }
  return item;
}

export const humanIllustrationIds: Record<string, string> = {
  economy: "human-concept",
  cultureSociety: "human-goal",
  defenseForeign: "human-motive",
  politicsParty: "human-strategy",
};

export const ethicsIllustrationIds: Record<string, string> = {
  principle: "ethics-role",
  content: "ethics-content",
  principles: "ethics-principles",
};

export const cultureIllustrationIds: Record<string, string> = {
  "economy-limit": "culture-holistic",
  "social-issue": "culture-environment",
  "four-risks": "culture-political",
  "root-cause": "culture-integration",
};
