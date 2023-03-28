export const filterInputs = [
    { label: 'First Name', id: 'firstName' },
    { label: 'Last Name', id: 'lastName' },
    { label: 'Postal Code', id: 'postalCode' },
    { label: 'Email', id: 'email' },
];

export const filterDropdowns = [
    {
        placeholder: 'Living Style',
        id: 'livingStyle',
        options: [
            { label: "Senior's Apartments", value: 'seniorsapartments' },
            { label: 'Luxury Apartments', value: 'luxuryapartments' }
        ]
    },
    {
        placeholder: 'Number of Bedrooms',
        id: 'numOfBeds',
        options: [
            { label: 'One Bedroom', value: 'onebed' },
            { label: 'One Bedroom + Den', value: 'onebedden' },
            { label: 'Two Bedroom', value: 'twobed' },
            { label: 'Two Bedroom + Den', value: 'twobedden' },
        ]
    },
    {
        placeholder: 'Square Foot Range',
        id: 'sqftRange',
        options: [
            { label: '400 sqft - 499 sqft', value: '400-499' },
            { label: '500 sqft - 599 sqft', value: '500-599' },
            { label: '600 sqft - 699 sqft', value: '600-699' },
            { label: '700 sqft - 799 sqft', value: '700-799' },
            { label: '800 sqft - 899 sqft', value: '800-899' },
            { label: '900 sqft - 999 sqft', value: '900-999' },
            { label: '1000+ sqft', value: '1000+' },
        ]
    },
    {
        placeholder: 'Number of Bathrooms',
        id: 'numOfBaths',
        options: [
            { label: 'One Bathroom', value: 'onebathroom' },
            { label: 'Two Bathroom', value: 'twobathroom' },
        ]
    },
];

export const filterCheckboxes = [
    { label: 'Den', id: 'hasDen' },
    { label: 'Balcony', id: 'hasBalcony' },
    { label: 'Ensuite', id: 'hasEnsuite' },
    { label: 'Walk-In Closet', id: 'hasWalkInCloset' },
    { label: 'Accessibility', id: 'isAccessible' },
    { label: 'VR Tour', id: 'hasVrTour' }
];