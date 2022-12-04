import styled from 'styled-components'

export const Box = styled.div`
        display: flex;

    justify-content: center;
`
export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 400px;
align-items: center;
text-align: center;
`
export const Input = styled.input`
    display: block;
    border-radius: 5px;
    padding: 5px;
    min-width: 200px;
    border: 1px solid grey;
    background-color: #fff;
    margin-top: 5px;
`
export const Label = styled.label`
    color: black;
`
export const Button = styled.button`
    background-color: #b2baba;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    &:hover, 
    &:focus{
        background-color: #cdbbbb;
    }
`