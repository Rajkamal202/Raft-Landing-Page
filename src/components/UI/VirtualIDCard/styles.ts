'use client';

import { styled, keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(249, 115, 22, 0.5));
  }
`;

export const IDCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  padding: 2rem;
  position: relative;
`;

export const SuccessOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
`;

export const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 2px;
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  margin-bottom: 2rem;
`;

export const TicketCard = styled.div`
  position: relative;
  display: flex;
  background-image: url('/images/ticket_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
  width: 580px;
  height: 340px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${glow} 3s ease-in-out infinite;
  transform-style: preserve-3d;

  @media (max-width: 640px) {
    width: 100%;
    max-width: 360px;
    height: 220px;
  }
`;

export const TicketContent = styled.div`
  flex: 1;
  padding: 2.5rem;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 1.5rem;
    padding-right: 70px;
  }
`;

export const EventBranding = styled.div`
  span {
    display: block;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 0.25rem;
  }

  .tagline {
    margin-top: 0.5rem;
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const EventTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.9);
  letter-spacing: 0.02em;
`;

export const ParticipantName = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.95);
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 1.5rem 0 0;
  word-break: break-word;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const EventDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 0.05em;
  margin-top: auto;
  padding-top: 1rem;

  .dot {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

export const RegistrationCode = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  .label {
    display: block;
    font-size: 0.75rem;
    color: var(--link-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .code {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: monospace;
    color: var(--white);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    letter-spacing: 0.1em;
  }
`;

export const QRSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .qr-container {
    display: inline-block;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 0.8125rem;
    color: var(--link-color);
    margin-top: 0.75rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 100%);
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(43, 137, 46, 0.3);
  }
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--white);
    background: rgba(255, 255, 255, 0.05);
  }
`;
