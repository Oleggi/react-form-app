export let getUsers = (state) => {
    return state.usersPage.users;
}

export let getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export let getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export let getPage = (state) => {
    return state.usersPage.page;
}

export let getIsFetching = (state) => {
    return state.usersPage.isFetching;
}


export let getIsFollowingActive = (state) => {
    return state.usersPage.isFollowingActive;
}


export let getPortionSize = (state) => {
    return state.usersPage.portionSize;
}