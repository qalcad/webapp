import MediaDto from "./mediaDto";
import BusinessInfoDto from "./businessInfoDto";

export default interface BusinessDto {
  slug: string;
  info: BusinessInfoDto;
  media: MediaDto[];
}
