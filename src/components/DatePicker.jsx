import { DefaultIcon, Input } from "@chakra-ui/react";

function DatePicker({ value, onChange }) {
  return <Input type="date" size="lg" value={value} onChange={onChange} />;
}

export default DatePicker;
