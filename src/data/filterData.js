export const filterInputs = [
    { label: 'First Name', id: 'firstName' },
    { label: 'Last Name', id: 'lastName' },
    { label: 'Postal Code', id: 'postalCode' },
    { label: 'Email', id: 'email' },
];

export const filterDropdowns = [
    {
        placeholder: 'What Style of Living Are You Interested In?',
        id: 'livingStyle',
        section: 'home',
        options: [
            { label: 'Luxury Apartments', value: 'luxuryapartments' },
            { label: "Senior's Apartments", value: 'seniorsapartments' },
        ]
    },
    {
        placeholder: 'Number of Bedrooms',
        id: 'numOfBeds',
        options: [
            { label: 'One Bedroom', value: 'onebedroom' },
            { label: 'One Bedroom + Den', value: 'onebedroomden' },
            { label: 'Two Bedroom', value: 'twobedroom' },
            { label: 'Two Bedroom + Den', value: 'twobedroomden' },
        ]
    },
    {
        placeholder: 'Square Foot Range',
        id: 'sqftRange',
        options: [
            { label: '500 sqft - 599 sqft', value: '500599' },
            { label: '600 sqft - 699 sqft', value: '600699' },
            { label: '700 sqft - 799 sqft', value: '700799' },
            { label: '800 sqft - 899 sqft', value: '800899' },
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
    { label: 'VR Tour', id: 'hasVirtualTour' }
];