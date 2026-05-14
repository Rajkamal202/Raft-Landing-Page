'use client';

import { styled, keyframes } from 'styled-components';

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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
  background: linear-gradient(
    135deg,
    #e07830 0%,
    #f59e0b 25%,
    #f97316 50%,
    #ea580c 75%,
    #dc6a1a 100%
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 8s ease infinite;
  border-radius: 12px;
  overflow: hidden;
  min-width: 580px;
  max-width: 620px;
  min-height: 260px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  animation: ${glow} 3s ease-in-out infinite, ${gradientMove} 8s ease infinite;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.15;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
    min-height: auto;
  }
`;

export const TicketNotch = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: var(--Background, #0a0a0a);
  border-radius: 50%;
  z-index: 10;

  &.top-left {
    top: -12px;
    left: -12px;
  }

  &.top-right {
    top: -12px;
    right: -12px;
  }

  &.bottom-left {
    bottom: -12px;
    left: -12px;
  }

  &.bottom-right {
    bottom: -12px;
    right: -12px;
  }
`;

export const TicketLeft = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  .participant-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;

    .org {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
    }

    .role-badge {
      font-size: 0.625rem;
      font-weight: 700;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.9);
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

export const TicketRight = styled.div`
  width: 60px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-left: 2px dashed rgba(0, 0, 0, 0.15);

  @media (max-width: 640px) {
    width: 100%;
    height: 50px;
    border-left: none;
    border-top: 2px dashed rgba(0, 0, 0, 0.15);
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

export const AdmitBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.25);
  letter-spacing: 0.3em;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  span {
    display: block;
  }

  @media (max-width: 640px) {
    writing-mode: horizontal-tb;
    flex-direction: row;
    gap: 0.125rem;
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
