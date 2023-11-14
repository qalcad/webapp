export interface TextDto {
  type: string;
  text: string;
}

export interface BlockDto {
  type: string;
  children: Array<BlockDto | TextDto>;
}

export default interface BusinessHomeDto extends BlockDto {}
