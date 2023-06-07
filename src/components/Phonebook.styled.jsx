import styled from '@emotion/styled';

export const SectionName = styled.h1`
    text-transform: uppercase;
`;

export const Container = styled.section`
    position: absolute;
    z-index: 1000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 20vw;
    padding: 2rem;
    align-items: center;
    background-color: lightgray;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    border-radius: 0.25rem;
    background-color: gray;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 3px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const FormGroup = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 18px;
`;
export const Button = styled.button`
    cursor: pointer;
    padding: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 3px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const FilterContainer = styled.label`
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
`;
export const ContactListContainer = styled.ul`
    width: 100%;
    padding: 0.25rem 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 3px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
`;
export const ContactItem = styled.li`
    display: flex;
    margin-bottom: 0.25rem;
    justify-content: space-between;
    font-weight: 600;
`;
export const DeleteButton = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 3px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
