import React, { useState } from 'react';
import { View } from 'react-native';
import RangeSlider from '@/components/Slider';

const Explore: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onValueChange={handleValueChange}
      />
    </View>
  );
};
export default Explore;