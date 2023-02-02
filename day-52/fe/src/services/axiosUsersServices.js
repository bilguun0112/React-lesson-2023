import axios from 'axios'

async function fetchAllData(URL, setUsers) {
    const FETCHED_DATA = await axios.get(URL)
    console.log('axios', FETCHED_DATA.data);
    // const FETCHED_JSON = await FETCHED_DATA.json()
    // console.log('b', FETCHED_JSON)
    setUsers(FETCHED_DATA.data.data)
}
async function deleteUser(userId, URL, setUsers) {
    // 1r arga

    const FETCHED_DATA = await axios({
        url: URL, method: 'DELETE',
        data: {
            userId: userId
        }
    })
    setUsers(FETCHED_DATA.data.data)
}

async function updateUser(e, URL, setUsers) {
    const FETCHED_DATA = await axios({
        url: URL, method: 'POST',
        data: {
            username: e.target.username.value,
            age: e.target.age.value
        }
    })
    setUsers(FETCHED_DATA.data.data)
}
async function createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUSer, newUser) {
    // // /   fetcheer
    // const putData = {
    //     id: currentUser.id,
    //     username: currentUser.username,
    //     age: currentUser.age
    // }

    // const options = {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(putData)
    // }
    // const FETCHED_DATA = await fetch(URL, options)
    // const FETCHED_JSON = await FETCHED_DATA.json()
    // setUsers(FETCHED_JSON.data)
    // setIsUpdate(false)
    // setCurrentUSer(newUser)
    /// Axios.r
    const FETCHED_DATA = await axios({
        url: URL, method: 'PUT',
        data: {
            id: currentUser.id,
            username: currentUser.username,
            age: currentUser.age
        }
    })
    setUsers(FETCHED_DATA.data.data)
    setIsUpdate(false)
    setCurrentUSer(newUser)
}
export { fetchAllData, deleteUser, updateUser, createUser }