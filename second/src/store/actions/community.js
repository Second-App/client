import axios from '../../axios'
import { SET_COMMUNITY, ADD_COMMUNITY, REMOVE_ONE_COMMUNITY } from '../types'
import { toast } from 'react-toastify'

export function fetchCommunity() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/community",
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(data)
      dispatch(SET_COMMUNITY(data))
    } catch (err) {
      console.log(err)
      toast.error(err.msg)
    }
  }
}

export function addCommunity(payload) {
  console.log(payload)
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/community',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload,
      })
      console.log(data)
      await dispatch(ADD_COMMUNITY(data))
      toast.success(data.msg)
    } catch (err) {
      console.log(err)
    }
  }
}

export function removeOneCommunity(id) {
  return async (dispatch) => {
    try {
      const {data} = await axios({
        method: "DELETE",
        url: "/community/" + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(data)
      await dispatch(REMOVE_ONE_COMMUNITY({
        id
      }))
      toast.success(data.msg)
    } catch (err) {
      console.log(err)
      toast.error(err.msg)
    }
  }
}
