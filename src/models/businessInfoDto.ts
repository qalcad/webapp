export default interface BusinessInfoDto {
  name?: string;
  verified?: boolean;
  slogan?: string;
  businessType?: string;
  formattedPhoneNumbers?: string[];
  formattedAddress?: string;
  keywords?: string[];
  description?: string;
}
