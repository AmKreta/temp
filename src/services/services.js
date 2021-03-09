const server = 'http://13.126.113.214:5001/';


export const GET_OTP = `${server}api/auth/user-get-otp`;

// @reqBody={phoneNo,otp}
// @res={ status:true/false, payload:jwt }
export const VERIFY_OTP = `${server}api/auth/user-verify-otp`;

export const USER_GET_OTP = `${server}api/user/user-get-otp`;
export const USER_VERIFY_OTP = `${server}api/user/user-verify-otp`

// returns a url for retreiving search result
export const SEARCH_BUSINESS = (category, query, filter) => {
  let searchQuery = query !== '' ? `&search=${query}` : '';  //search value
  let locationQuery = filter.location ? `&city=${filter.value}` : ''; //location
  let specialityQuery = filter.speciality ? `&speciality=${filter.value}` : ''; //speciality
  let categoryQuery = category !== 'All' ? `&category=${category}` : '';  //category
  let url = `${server}api/business?${searchQuery}${locationQuery}${specialityQuery}${categoryQuery}`;
  return url;
}

//returns a url for retreiving available doctors in a hospital or
//hospitals doctor is going to be vailable in
//export const getAvailablityList = (id) => {
//  let url = `${server}`;
//}

//registring user 
export const REGISTER_LINK = `${server}api/business`;
export const UPDATE_REGISTERED_USER = `${server}api/business/update`;
export const GET_USER_DEETAIL_BY_TOKEN = `${server}api/business/details`;

//adding products and tests
//export const ADD_TEST_AND_PRODUCTS = `${server}api/product/create`;
//export const GET_TEST_AND_PRODUCTS = `${server}api/product/find/business`;
export const ADD_TESTS = `${server}api/test/create`;
export const ADD_PRODUCTS = `${server}api/product/create`;
export const GET_TESTS = `${server}api/test/find/business`;
export const GET_PRODUCTS = `${server}api/product/find/business`;
export const ADD_BULK_PRODUCTS = `${server}api/product/create/batch`;
export const ADD_BULK_TEST = `${server}api/test/create/batch`;
export const UPDATE_MY_PRODUCT = (productId) => `${server}api/product/update/${productId}`;
export const UPDATE_MY_TEST = (testId) => `${server}/api/test/update/${testId}`;

//getting products or test categories
export const GET_PRODUCTS_CATEGORY = `${server}api/pharmacy/product/categories`;
export const GET_TEST_CATEGORY = `${server}api/pharmacy/product/categories`;

//getting staff roles
export const GET_HOSPITAL_STAFF_ROLES = `${server}api/pharmacy/staff/roles`;
export const GET_PHARMACY_STAFF_ROLES = `${server}api/pharmacy/staff/roles`;
export const GET_PATHOLOGO_STAFF_ROLES = `${server}api/pharmacy/staff/roles`;

//appointment
export const createAppointment = `${server}api/appointment/`;
export const getAppointmentByBusiness = `${server}api/appointment/business`;
export const getAppointmentByCustomer = `${server}api/appointment/user`;
export const getAppointmentById = (id) => `${server}api/appointment/id/${id}`;
export const updateAppointmentByID = (id) => `${server}api/appointment/update/${id}`;

//uploading files
export const UPLOAD_FILE = `${server}api/blob/upload`;

//orders details
export const GET_ORDERS_BY_BUSINESS = `${server}api/order/all/business`;


export const FILE_UPLOAD = `${server}api/blob/upload/`;
