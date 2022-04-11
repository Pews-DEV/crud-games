import { useState } from "react"
import { PrimaryButton } from "../Buttons"

import * as S from "./styles"

export default function AddUserForm(props) {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <S.Form>
            <S.FormHeader>
                <S.FormTitle>Add Game</S.FormTitle>
            </S.FormHeader>
            <S.Formbody
                onSubmit={event => {
                    event.preventDefault()
                    if (!user.name || !user.username) return

                    props.addUser(user)
                    setUser(initialFormState)
                }}>
                <S.LabelForm>
                    <label>Name</label>
                    <S.LabelFormInput
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </S.LabelForm>
                <S.LabelForm>
                    <label>Username</label>
                    <S.LabelFormInput
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </S.LabelForm>
                <PrimaryButton>Add new user</PrimaryButton>
            </S.Formbody>
        </S.Form>
    )
}