// src/lib/t3Assets.ts

export interface CloudinaryAsset {
  public_id: string;
  display_name: string;
}

export interface T3Assets {
  logos: CloudinaryAsset[];
  images: CloudinaryAsset[];
  textures: CloudinaryAsset[];
  coloredIcons: CloudinaryAsset[];
  uncoloredIcons: CloudinaryAsset[];
}

export const T3_ASSETS: T3Assets = {
  logos: [
    { public_id: "Horizontal_-_Green_bfa6kg", display_name: "Horizontal - Green" },
    { public_id: "Vertical_-_White_elepk2",   display_name: "Vertical - White" },
    { public_id: "Vertical_-_Green_l2vte9",   display_name: "Vertical - Green" },
  ],
  images: [
    { public_id: "Hero_tcg8tg",     display_name: "Hero" },
    { public_id: "About_Us_ke5fkt", display_name: "About Us" },
    { public_id: "Connon_orxosh",   display_name: "Connon" },
  ],
  textures: [
    { public_id: "Pink_Riso_iazffh", display_name: "Pink Riso" },
    { public_id: "grain_woh4si",     display_name: "Grain" },
  ],
  coloredIcons: [
    { public_id: "Office_kjnutt",    display_name: "Office" },
    { public_id: "Layout_pt0zpe",    display_name: "Layout" },
    { public_id: "Literary_luswlh",  display_name: "Literary" },
    { public_id: "Photo_igfqbi",     display_name: "Photo" },
    { public_id: "Marketing_u8zvr3", display_name: "Marketing" },
    { public_id: "CC_wlgfju",        display_name: "CC" },
    { public_id: "Web_av1kbj",       display_name: "Web" },
  ],
  uncoloredIcons: [
    { public_id: "Layout_i6mloz",    display_name: "Layout" },
    { public_id: "Literary_wgruzm",  display_name: "Literary" },
    { public_id: "Photo_m659nc",     display_name: "Photo" },
    { public_id: "Marketing_zik1ha", display_name: "Marketing" },
    { public_id: "Office_a8ifkl",    display_name: "Office" },
    { public_id: "CC_o5qr8k",        display_name: "CC" },
    { public_id: "Web_a9fny2",       display_name: "Web" },
  ],
};