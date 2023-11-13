export interface TextDto {
  type: string;
  text: string;
}

export interface ImageDto {
  type: string;
  src: string;
}

export interface BlockDto {
  type: string;
  children: Array<BlockDto | TextDto | ImageDto>;
}

export default interface BusinessHomeDto extends BlockDto {}
