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

//registring user 
export const REGISTER_LINK = `${server}api/business`;
export const UPDATE_REGISTERED_USER = `${server}api/business/update`;
export const GET_USER_DEETAIL_BY_TOKEN = `${server}api/business/details`;
export const REGISTER_AS_DOCTOR_LINK = `${server}api/doctor`;
export const REGISTER_AS_HOSPITAL_LINK = `${server}api/hospital`;
export const REGISTER_AS_PHARMACY_LINK = `${server}api/pharmacy`;
export const REGISTER_AS_PATHOLOGY_LINK = `${server}api/pathology`;