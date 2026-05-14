'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 2rem;
  padding-top: 8rem;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  min-height: calc(100vh - 10rem);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 8rem;

  @media (max-width: 968px) {
    position: relative;
    top: 0;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`;

export const SidebarSubtitle = styled.p`
  font-size: 0.875rem;
  color: var(--link-color);
  margin-bottom: 2rem;
`;

export const HighlightCard = styled.div`
  background: rgba(43, 137, 46, 0.1);
  border: 1px solid rgba(43, 137, 46, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HighlightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(43, 137, 46, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HighlightText = styled.span`
  font-size: 0.75rem;
  color: var(--link-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const HighlightValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--emerald);
`;

export const SponsorLogos = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: 0.75rem;
    color: var(--link-color);
    margin-bottom: 0.5rem;
  }

  div {
    font-size: 0.875rem;
    color: var(--white);
    opacity: 0.7;
  }
`;

export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;

  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .back-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--white);
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--white);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .review-section {
    h3 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      color: var(--white);
    }

    .review-group {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 0.75rem;
      padding: 1.25rem;
      margin-bottom: 1rem;

      h4 {
        font-size: 0.875rem;
        color: var(--emerald);
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      p {
        font-size: 0.9375rem;
        color: var(--light-gray);
        margin-bottom: 0.5rem;

        strong {
          color: var(--white);
        }
      }

      ul {
        margin-left: 1rem;
        margin-top: 0.5rem;

        li {
          font-size: 0.875rem;
          color: var(--light-gray);
          margin-bottom: 0.25rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1rem;
  color: var(--link-color);
  margin-bottom: 1.5rem;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  width: fit-content;
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $active }) => ($active ? 'var(--green)' : 'transparent')};
  color: var(--white);

  &:hover {
    background: ${({ $active }) =>
      $active ? 'var(--green)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  .step-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--white);
    flex-shrink: 0;
  }

  span {
    font-size: 0.875rem;
    color: var(--link-color);
    transition: color 0.3s ease;

    &.active {
      color: var(--white);
    }
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

export const StepLine = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 2px;
  background: ${({ $active }) =>
    $active ? 'var(--green)' : 'rgba(255, 255, 255, 0.1)'};
  margin: 0 0.5rem;
  transition: background 0.3s ease;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FormSection = styled.div`
  min-height: 300px;
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.5rem;
`;

export const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--white);
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--link-color);
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? '#ef4444' : 'var(--emerald)')};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(72, 214, 76, 0.1)'};
  }
`;

export const TextArea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--white);
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--link-color);
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? '#ef4444' : 'var(--emerald)')};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(72, 214, 76, 0.1)'};
  }
`;

export const Select = styled.select<{ $error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;

  option {
    background: var(--Background);
    color: var(--white);
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? '#ef4444' : 'var(--emerald)')};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(72, 214, 76, 0.1)'};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  display: block;
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  color: var(--link-color);
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--emerald);
    background: rgba(72, 214, 76, 0.05);
  }
`;

export const TeamMemberCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;

  ${InputRow} {
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  ${InputGroup} {
    margin-bottom: 0;
  }
`;

export const AddMemberButton = styled.button`
  background: transparent;
  border: 1px dashed rgba(72, 214, 76, 0.5);
  color: var(--emerald);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background: rgba(72, 214, 76, 0.1);
    border-color: var(--emerald);
  }
`;

export const RemoveMemberButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: var(--green);
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.9375rem;
  color: var(--light-gray);
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 100%);
  border: none;
  color: var(--white);
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: auto;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(43, 137, 46, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.375rem;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: var(--white);
    margin: 2rem 0 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--light-gray);
    line-height: 1.6;
    margin-bottom: 0.5rem;

    strong {
      color: var(--emerald);
    }
  }
`;
