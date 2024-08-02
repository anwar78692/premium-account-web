import React, { useState } from 'react';
import { Button } from "@mui/material";
import FilterButtons from './FilterButtons';
import PriceSlider from '@/pages/customcomponent/Slider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccordionItem from '@/pages/customcomponent/Accordian';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import OptionSelector from '@/pages/customcomponent/OptionSelector';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';


 const accordionItems = [
    {
      panel: 'panel1',
      title: 'Private',
      subtitle: '',
      content: (
        <>
          <Button variant="contained" color="primary" className="m-2">Education</Button>
          <Button variant="contained" color="secondary" className="m-2">OTT</Button>
          <Button variant="contained" color="success" className="m-2">Finance</Button>
          <Button variant="contained" color="warning" className="m-2">Traveling</Button>
          <Button variant="contained" color="error" className="m-2">Giftcard</Button>
        </>
      )
    },
    {
      panel: 'panel2',
      title: 'Cracked',
      subtitle: '',
      content: (
        <>
          <Button variant="contained" color="primary" className="m-2">Education</Button>
          <Button variant="contained" color="secondary" className="m-2">OTT</Button>
          <Button variant="contained" color="success" className="m-2">Finance</Button>
          <Button variant="contained" color="warning" className="m-2">Traveling</Button>
          <Button variant="contained" color="error" className="m-2">Giftcard</Button>
        </>
      )
    },
    {
      panel: 'panel3',
      title: 'Mixed content',
      subtitle: '',
      content: (
        <>
          <Button variant="contained" color="primary" className="m-2">Education</Button>
          <Button variant="contained" color="secondary" className="m-2">OTT</Button>
          <Button variant="contained" color="success" className="m-2">Finance</Button>
          <Button variant="contained" color="warning" className="m-2">Traveling</Button>
          <Button variant="contained" color="error" className="m-2">Giftcard</Button>
        </>
      )
    },
    {
      panel: 'panel4',
      title: 'Resellers',
      subtitle: '',
      content: (
        <>
          <Button variant="contained" color="primary" className="m-2">Education</Button>
          <Button variant="contained" color="secondary" className="m-2">OTT</Button>
          <Button variant="contained" color="success" className="m-2">Finance</Button>
          <Button variant="contained" color="warning" className="m-2">Traveling</Button>
          <Button variant="contained" color="error" className="m-2">Giftcard</Button>
        </>
      )
    }
  ];

const FilterTextIcon = () => {
    return (
        <div className='flex justify-between pb-[10px] mr-[10px] border-b-2 border-gray-400 pt-[12px]'>
            <h1 className='font-bold text-xl'>Filters</h1>
            <FilterAltIcon />
        </div>
    )
}

const FilterBasedStuffs = ({ expanded, handleChange }) => {
    ;
    return (
        <>
            {accordionItems.map((item) => (
                <AccordionItem
                    key={item.panel}
                    expanded={expanded === item.panel}
                    handleChange={handleChange}
                    panel={item.panel}
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                />
            ))}
        </>
    )
}
function ShippingOptions({ selectedOption, setSelectedOption }) {
    const shippingOptions = ['Express', 'Regular', 'Economy', 'Corgo'];

    return (
        <OptionSelector
            title="Shipping options"
            icon={LocalShippingIcon}
            options={shippingOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
    );
}

function StoreReviews({ selectedOption, setSelectedOption }) {
    const reviewOptions = ['All media', 'Video', 'Picture', 'Star'];

    return (
        <OptionSelector
            title="Store reviews"
            icon={StoreMallDirectoryIcon}
            options={reviewOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
    );
}

const PriceFilter = ({ selectedPrice, setSelectedPrice }) => {
    const handlePriceChange = (price) => {
        setSelectedPrice(price);
    };

    return (
        <>
            <div className="flex justify-between pb-[8px] mr-[10px] border-b-2 border-gray-400 pt-[12px]">
                <h1 className="font-bold text-xl">Price</h1>
                <CurrencyRupeeIcon />
            </div>
            <PriceSlider defaultValue={selectedPrice} min={0} max={10000} onPriceChange={handlePriceChange} />
        </>
    );
};

function ProductType({ selectedOption, setSelectedOption }) {
    const shippingOptions = ['Premium', 'Normal', 'Secondhand', 'Original'];
    return (
        <OptionSelector
            title="Product type"
            icon={InventoryIcon}
            options={shippingOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
    );
}

function FilterSectionComponent() {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 10000,
        selectedShippingOption: '',
        selectedReviewOption: '',
        selectedProductType: '',
    });

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleReset = () => {
        setFilters({
            minPrice: 0,
            maxPrice: 10000,
            selectedShippingOption: '',
            selectedReviewOption: '',
            selectedProductType: '',
        });
        console.log('Filters reset');
    };

    const handleApply = () => {
        console.log('Filters applied', filters);
    };

    return (
        <>
            <FilterTextIcon />
            <FilterBasedStuffs expanded={expanded} handleChange={handleChange} />
            <ShippingOptions
                selectedOption={filters.selectedShippingOption}
                setSelectedOption={(option) => setFilters({ ...filters, selectedShippingOption: option })}
            />
            <StoreReviews
                selectedOption={filters.selectedReviewOption}
                setSelectedOption={(option) => setFilters({ ...filters, selectedReviewOption: option })}
            />
            <PriceFilter
                selectedPrice={filters.minPrice}
                setSelectedPrice={(price) => setFilters({ ...filters, minPrice: price })}
            />
            <ProductType
                selectedOption={filters.selectedProductType}
                setSelectedOption={(option) => setFilters({ ...filters, selectedProductType: option })}
            />
            <FilterButtons onReset={handleReset} onApply={handleApply} />
        </>
    );
}

export default FilterSectionComponent;

