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
  imageSrc: string;
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
    imageSrc: "/images/anh1.jpg",
    title: "Tri thức và cảm hứng",
    description: "Cuốn sách mở phát sáng, hoa sen và bản đồ Việt Nam dạng ánh sáng.",
    prompt:
      "Elegant Vietnamese educational illustration, an open book glowing with warm golden light, white lotus flowers, subtle Vietnam map outline in the background, faint Dong Son drum pattern, burgundy and gold color palette, soft cinematic lighting, clean composition, premium presentation style, no text, no watermark.",
    variant: "hero",
    icon: "BookOpen",
    section: "hero",
  },
  intro: {
    id: "intro",
    imageSrc: "/images/anh2.jpg",
    title: "Không gian thuyết trình",
    description: "Sinh viên thuyết trình trong không gian học thuật trang trọng.",
    prompt:
      "Vietnamese university students giving a respectful classroom presentation, warm golden light, open book and microphone on podium, elegant academic atmosphere, burgundy and cream color palette, soft realistic illustration style, no text, no watermark.",
    variant: "intro",
    icon: "Mic2",
    section: "intro",
  },
  "human-concept": {
    id: "human-concept",
    imageSrc: "/images/anh3.jpg",
    title: "Thành tựu kinh tế",
    description: "Tăng trưởng GDP, hội nhập quốc tế, hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
    prompt:
      "Vietnamese economic achievement illustration, upward growth chart, modern skyline, ports and logistics, golden light, burgundy and cream palette, elegant educational style, no text.",
    variant: "human",
    icon: "TrendingUp",
    section: "human",
  },
  "human-goal": {
    id: "human-goal",
    imageSrc: "/images/anh5.jpg",
    title: "Văn hóa - xã hội chuyển biến tích cực",
    description: "Đời sống tinh thần phong phú, xóa đói giảm nghèo, nâng cao dân trí.",
    prompt:
      "Warm illustration of Vietnamese community life, cultural festivals, families, education, social welfare, soft golden light, respectful tone, no text.",
    variant: "human",
    icon: "Heart",
    section: "human",
  },
  "human-motive": {
    id: "human-motive",
    imageSrc: "/images/anh6.jpg",
    title: "Quốc phòng, an ninh, đối ngoại",
    description: "Giữ vững độc lập chủ quyền, hội nhập quốc tế, nâng cao vị thế đất nước.",
    prompt:
      "Vietnamese national defense and diplomacy illustration, flag, handshake, dove of peace, golden light, burgundy gold palette, no text.",
    variant: "human",
    icon: "ShieldCheck",
    section: "human",
  },
  "human-strategy": {
    id: "human-strategy",
    imageSrc: "/images/anh7.png",
    title: "Xây dựng Đảng và Nhà nước pháp quyền",
    description: "Dân chủ XHCN, Nhà nước pháp quyền, vai trò lãnh đạo của Đảng ngày càng vững mạnh.",
    prompt:
      "Symbolic illustration of party building and rule of law, classical building columns, scales of justice, lotus and golden light, no text.",
    variant: "human",
    icon: "Landmark",
    section: "human",
  },
  culture: {
    id: "culture",
    imageSrc: "/illustrations/culture-human-infographic.png",
    title: "Văn hóa và con người",
    description: "Infographic văn hóa — phát triển toàn diện và hội nhập.",
    prompt:
      "Modern Vietnamese culture infographic illustration, central human and lotus symbol, four surrounding branches representing holistic human development, healthy cultural environment, political and economic culture, international cultural integration, Dong Son drum pattern, burgundy gold cream palette, no text.",
    variant: "culture",
    icon: "Globe2",
    section: "culture",
  },
  "culture-holistic": {
    id: "culture-holistic",
    imageSrc: "/images/div1.jpg",
    title: "Phát triển toàn diện",
    description: "Con người phát triển đồng đều về trí tuệ, đạo đức, thể chất và tâm hồn.",
    prompt:
      "Vietnamese educational illustration of holistic human development, reading, creativity, physical wellness, golden light and lotus, burgundy gold cream palette, no text.",
    variant: "culture",
    icon: "Sprout",
    section: "culture",
  },
  "culture-environment": {
    id: "culture-environment",
    imageSrc: "/images/le-hoi-den-hung-ruoc-kieu.jpg",
    title: "Môi trường văn hóa lành mạnh",
    description: "Cộng đồng sống hòa hợp, văn hóa trong đời sống hằng ngày.",
    prompt:
      "Peaceful healthy Vietnamese cultural environment, families, community, festival, lotus pond, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Heart",
    section: "culture",
  },
  "culture-political": {
    id: "culture-political",
    imageSrc: "/images/div3.jpg",
    title: "Văn hóa chính trị và kinh tế",
    description: "Văn hóa trong hoạt động quản lý nhà nước và phát triển kinh tế.",
    prompt:
      "Culture in politics and economy illustration, government and marketplace harmony, balanced scale, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Scale",
    section: "culture",
  },
  "culture-integration": {
    id: "culture-integration",
    imageSrc: "/images/div4.jpg",
    title: "Hội nhập văn hóa quốc tế",
    description: "Tiếp thu tinh hoa nhân loại, giữ gìn bản sắc dân tộc.",
    prompt:
      "International cultural integration, globe with Vietnam, diverse exchange, lotus and national identity, burgundy gold palette, no text.",
    variant: "culture",
    icon: "Globe2",
    section: "culture",
  },
  ethics: {
    id: "ethics",
    imageSrc: "/images/ethics-main.jpg",
    title: "Đạo đức cách mạng",
    description: "La bàn đạo đức, ngọn lửa lý tưởng và biểu tượng chính trực.",
    prompt:
      "Elegant moral values illustration, golden compass, balanced scale, protective shield, warm flame of ideals, hands holding a heart, Vietnamese cultural patterns, burgundy and gold, clean academic presentation style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-role": {
    id: "ethics-role",
    imageSrc: "/images/ethics-role.jpg",
    title: "Vai trò đạo đức",
    description: "Ngọn lửa lý tưởng và trái tim phục vụ nhân dân.",
    prompt:
      "Warm flame of revolutionary ideals and heart symbol, burgundy and gold, respectful Vietnamese educational style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-content": {
    id: "ethics-content",
    imageSrc: "/images/ethics-content.jpg",
    title: "Nội dung đạo đức",
    description: "Cần, kiệm, liêm, chính — nền tảng nhân cách.",
    prompt:
      "Four golden virtue symbols representing thrift, integrity, honesty and righteousness, balanced scale, burgundy gold palette, no text.",
    variant: "ethics",
    icon: "Scale",
    section: "ethics",
  },
  "ethics-principles": {
    id: "ethics-principles",
    imageSrc: "/images/ethics-principles.jpg",
    title: "Nguyên tắc rèn luyện",
    description: "Con đường tu dưỡng dẫn tới ánh sáng.",
    prompt:
      "Symbolic path of lifelong moral self-improvement, a clean road leading to warm golden light, lotus flowers along the path, calm Vietnamese educational illustration, no text.",
    variant: "ethics",
    icon: "ShieldCheck",
    section: "ethics",
  },
  practice: {
    id: "practice",
    imageSrc: "/images/hcm-with-children-2.jpg",
    title: "Bác Hồ với thiếu nhi",
    description: "Bác Hồ dặn dò học sinh, thiếu nhi — thế hệ tương lai của đất nước.",
    prompt:
      "Vietnamese university students studying in a bright library, helping each other, using laptop and smartphone responsibly, warm academic atmosphere, clean modern illustration, gold and cream tones, no text.",
    variant: "practice",
    icon: "BookOpen",
    section: "practice",
    objectFit: "contain",
    objectPosition: "center",
  },
  conclusion: {
    id: "conclusion",
    imageSrc: "/images/hcm-portrait-1946.jpg",
    title: "Chủ tịch Hồ Chí Minh",
    description: "Chân dung chính thức Chủ tịch Hồ Chí Minh năm 1946 — biểu tượng của độc lập, tự do và hạnh phúc.",
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
