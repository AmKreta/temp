const server = 'http://13.126.113.214:5001/';


export const GET_OTP = `${server}api/auth/user-get-otp`;

// @reqBody={phoneNo,otp}
// @res={ status:true/false, payload:jwt }
export const VERIFY_OTP = `${server}api/auth/user-verify-otp`;

// returns a url for retreiving search result
export const SEARCH_BUSINESS = (category, query, filter) => {
    let searchQuery = query !== '' ? `&search=${query}` : '';
    let locationQuery = filter.location ? `&area=${filter.value}` : '';
    let specialityQuery = filter.speciality ? `&speciality=${filter.value}` : '';
    let categoryQuery = category !== 'All' ? `&category=${category}` : '';
    let url = `${server}api/business?${searchQuery}${locationQuery}${specialityQuery}${categoryQuery}`;
    return url;
}

//returns a url for retreiving available doctors in a hospital or
//hospitals doctor is going to be vailable in
export const getAvailablityList = (id) => { 
    let url = `${server}`;
}