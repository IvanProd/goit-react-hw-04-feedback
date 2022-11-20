import styled from 'styled-components';

export const FeedbackOptionBtn = styled.button`
  &:not(:last-child) {
    margin-right: 30px;
  }
  font-size: 25px;

  padding: 15px 30px;
  background-color: #404040;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #565656;
    box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  }
`;
