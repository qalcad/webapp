export default interface BusinessInfoDto {
  name?: string;
  verified?: boolean;
  slogan?: string | null;
  businessType?: string;
  formattedPhoneNumbers?: string[];
  formattedAddress?: string;
  keywords?: string[];
  description?: string;
}
