import { createSlice } from '@reduxjs/toolkit'



const initialState = 
{

    basicInfo:{
        id:'basicInfo',
        title: 'Basic Info',
        details:[]
    },

    workExp: {
        id: 'workExp',
        title: 'Work Experience',
        details:[]
    },

    projects:{
        id:'projects',
        title:'Projects',
        details:[]
    },
    achievements:{
        id:'achievements',
        title:'Achievements',
        details:[]
    },
    education:{
      id:'education',
      title:'Education',
      details:[]
    },
    summery:{
     id:'summery',
     title:"Summery",
     details:[]
    },
    others:{
      id:'others',
      title:'Others',
      details:[]
    }
}

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
        
    basic: (state, action) => {
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            details: action.payload
          }
        }
        
      },
    
        work:(state,action)=>{

          return {
            ...state,
            workExp: {
              ...state.workExp,
              details:[...state.workExp.details,action.payload] 
            }
          }

        },

        removeWork:(state,action)=>{
           return{
            ...state,
            workExp: {
              ...state.workExp,
              details:action.payload
            }
           }
        },

        project:(state,action)=>{
          
          return {
            ...state,
            projects: {
              ...state.projects,
              details:[...state.projects.details,action.payload] 
            }
          }

        },

        removeProject:(state,action)=>{
           return {
            ...state,
            projects:{
              ...state.projects,
              details:action.payload,
            }
           }
        },
        achieve:(state,action)=>{

          return {
            ...state,
            achievements: {
              ...state.achievements,
              details:[...state.achievements.details,action.payload] 
            }
          }    

        },
        
        removeAchive:(state,action)=>{
          return{
            ...state,
            achievements:{
              ...state.achievements,
              details:action.payload
            }
          }
        },

        edu:(state,action)=>{
          return {
            ...state,
            education: {
              ...state.education,
              details:[...state.education.details,action.payload] 
            }
          }
        },

        removeEdu:(state,action)=>{
          return {
            ...state,
            education:{
              ...state.education,
              details:action.payload,
            }
          }
        },

        sum:(state,action)=>{
          return {
            ...state,
            summery: {
              ...state.summery,
              details:[...state.summery.details,action.payload] 
            }
          }
            
        },

        removeSum:(state,action)=>{
           return {
            ...state,
            summery:{
              ...state.summery,
              details:action.payload
            }
           }
        },

        othr:(state,action)=>{
          return {
            ...state,
            others: {
              ...state.others,
              details:[...state.others.details,action.payload] 
            }
          }
        }


  },
})

// Action creators are generated for each case reducer function
export const { basic,work,project,achieve,edu ,othr,sum,removeWork,removeEdu,removeProject,removeAchive,removeSum} = UserSlice.actions

export default UserSlice.reducer;

