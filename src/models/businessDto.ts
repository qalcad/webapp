import MediaDto from "./mediaDto";
import BusinessInfoDto from "./businessInfoDto";
import AddressDto from "./addressDto";

export default interface BusinessDto {
  slug: string;
  info: BusinessInfoDto;
  media: MediaDto[];
  address: AddressDto;
}
