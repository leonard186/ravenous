const apiKey = '0Co6aynfhibcjxFOsPhaMY3H3AZrZUJtLVCAn7ense8zi6a8kYSyHA-A6NSO4cTODjFuDIjePkzHUKgt7tIwN89eMzUAhN-2mLp-pL3M0Nm8YrEBGcKp3ACslTS_WnYx';
const url = 'https://api.yelp.com/v3';

const Yelp = {
  search(term, location, sortBy){

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => response.json()).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      } throw new Error('Something went wrong!')
    })
  }
};

export default Yelp;
