import { GoogleAutoComplete } from "./styled";

interface Props {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
  padding?: string;
  fontSize?: string;
}

export const AddressAutocomplete = ({
  name,
  value,
  onChange,
  disabled,
  padding,
  fontSize,
}: Props) => {
  const handlePlaceSelected = (place: any) => {
    onChange(name, place.formatted_address);
  };

  return (
    <GoogleAutoComplete
      apiKey="AIzaSyBPmlUvFH5WuqnHdSOx2FYqhI-xOwHAfFk"
      onPlaceSelected={handlePlaceSelected}
      options={{
        types: ["geocode"],
        componentRestrictions: { country: "DE" },
      }}
      //@ts-ignore
      placeholder={value || ""}
      disabled={disabled}
      $padding={padding}
      $fontSize={fontSize}
    />
  );
};
