export async function getLocationCityName(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.address) {
            // Try to extract the city, town, village, or hamlet
            const city = data.address.city || data.address.town || data.address.village || data.address.hamlet;
            if (city) {
                return city;
            } else {
                throw new Error('City name not found in the response');
            }
        } else {
            throw new Error('No address field in the Nominatim API response');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


