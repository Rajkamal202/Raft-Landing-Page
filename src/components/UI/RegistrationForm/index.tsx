'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrapper,
  Inner,
  FormContainer,
  Sidebar,
  FormSection,
  StepIndicator,
  Step,
  StepLine,
  TabContainer,
  Tab,
  InputGroup,
  Label,
  Input,
  TextArea,
  Select,
  FileInput,
  FileLabel,
  SubmitButton,
  FormTitle,
  FormSubtitle,
  TeamMemberCard,
  AddMemberButton,
  RemoveMemberButton,
  CheckboxGroup,
  Checkbox,
  CheckboxLabel,
  SidebarTitle,
  SidebarSubtitle,
  HighlightCard,
  HighlightIcon,
  HighlightText,
  HighlightValue,
  SponsorLogos,
  InputRow,
  ErrorText,
  SuccessMessage,
} from './styles';

const steps = ['Basic Info', 'Details', 'Hackathon', 'Review'];

const areasOfInterest = [
  'Artificial Intelligence / ML',
  'Web3 / Blockchain',
  'Fintech',
  'HealthTech',
  'SaaS',
  'Cybersecurity',
  'Climate Tech',
  'EdTech',
  'Other',
];

const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const tracks = [
  'AI/ML Innovation',
  'Web3 & DeFi',
  'Climate & Sustainability',
  'Open Innovation',
];

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

const RegistrationForm = () => {
  const [registrationType, setRegistrationType] = useState<'solo' | 'team'>('solo');
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    city: '',
    linkedin: '',
    github: '',
    portfolio: '',
    teamName: '',
    teamSize: '2',
    whyJoin: '',
    areaOfInterest: '',
    experienceLevel: '',
    preferredTrack: '',
    dietaryPreferences: '',
    needAccommodation: false,
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', email: '', role: '' },
  ]);

  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleTeamMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: '', email: '', role: '' }]);
    }
  };

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.organization.trim())
        newErrors.organization = 'Organization is required';
    }

    if (step === 1) {
      if (registrationType === 'team') {
        if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
        teamMembers.forEach((member, i) => {
          if (!member.name.trim())
            newErrors[`member${i}name`] = 'Member name is required';
          if (!member.email.trim())
            newErrors[`member${i}email`] = 'Member email is required';
        });
      }
    }

    if (step === 2) {
      if (!formData.whyJoin.trim()) newErrors.whyJoin = 'This field is required';
      if (!formData.areaOfInterest)
        newErrors.areaOfInterest = 'Please select an area';
      if (!formData.experienceLevel)
        newErrors.experienceLevel = 'Please select your level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const formVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (isSuccess) {
    return (
      <Wrapper>
        <Inner>
          <SuccessMessage
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#2b892e" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="30" fill="#2b892e" />
                <path
                  d="M28 40L36 48L52 32"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <h2>Registration Successful!</h2>
            <p>
              Thank you for registering for Nortable 2026. We&apos;ve sent a confirmation
              email to <strong>{formData.email}</strong>.
            </p>
            <p>Get ready to build the future with us on June 14-16, 2026!</p>
          </SuccessMessage>
        </Inner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        <Sidebar>
          <SidebarTitle>Nortable 2026</SidebarTitle>
          <SidebarSubtitle>Code. Collaborate. Create Impact.</SidebarSubtitle>

          <HighlightCard>
            <HighlightIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </HighlightIcon>
            <HighlightText>Total Prizes</HighlightText>
            <HighlightValue>$500K+</HighlightValue>
          </HighlightCard>

          <HighlightCard>
            <HighlightIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="#48d64c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </HighlightIcon>
            <HighlightText>Expected Hackers</HighlightText>
            <HighlightValue>5,000+</HighlightValue>
          </HighlightCard>

          <HighlightCard>
            <HighlightIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="#48d64c"
                  strokeWidth="2"
                />
                <path d="M16 2V6" stroke="#48d64c" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 2V6" stroke="#48d64c" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 10H21" stroke="#48d64c" strokeWidth="2" />
              </svg>
            </HighlightIcon>
            <HighlightText>Event Date</HighlightText>
            <HighlightValue>June 14-16</HighlightValue>
          </HighlightCard>

          <SponsorLogos>
            <p>Backed by</p>
            <div>Google | Microsoft | OpenAI</div>
          </SponsorLogos>
        </Sidebar>

        <FormContainer>
          <FormTitle>Register for Nortable 2026</FormTitle>
          <FormSubtitle>Join the most anticipated hackathon of the year</FormSubtitle>

          <TabContainer>
            <Tab
              $active={registrationType === 'solo'}
              onClick={() => setRegistrationType('solo')}
            >
              Solo
            </Tab>
            <Tab
              $active={registrationType === 'team'}
              onClick={() => setRegistrationType('team')}
            >
              Team
            </Tab>
          </TabContainer>

          <StepIndicator>
            {steps.map((step, index) => (
              <Step key={step}>
                <motion.div
                  className={`step-circle ${index <= currentStep ? 'active' : ''}`}
                  animate={{
                    backgroundColor:
                      index <= currentStep ? '#2b892e' : 'rgba(255,255,255,0.1)',
                    scale: index === currentStep ? 1.1 : 1,
                  }}
                >
                  {index + 1}
                </motion.div>
                <span className={index <= currentStep ? 'active' : ''}>{step}</span>
                {index < steps.length - 1 && (
                  <StepLine $active={index < currentStep} />
                )}
              </Step>
            ))}
          </StepIndicator>

          <AnimatePresence mode="wait">
            <FormSection
              as={motion.div}
              key={currentStep}
              variants={formVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <>
                  <InputRow>
                    <InputGroup>
                      <Label>Full Name *</Label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        $error={!!errors.fullName}
                      />
                      {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        $error={!!errors.email}
                      />
                      {errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </InputGroup>
                  </InputRow>

                  <InputRow>
                    <InputGroup>
                      <Label>Phone *</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                        $error={!!errors.phone}
                      />
                      {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                      <Label>College / Company *</Label>
                      <Input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="MIT / Google"
                        $error={!!errors.organization}
                      />
                      {errors.organization && (
                        <ErrorText>{errors.organization}</ErrorText>
                      )}
                    </InputGroup>
                  </InputRow>

                  <InputRow>
                    <InputGroup>
                      <Label>Year of Study / Role</Label>
                      <Input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Junior / Software Engineer"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>City / Country</Label>
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="San Francisco, USA"
                      />
                    </InputGroup>
                  </InputRow>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <InputRow>
                    <InputGroup>
                      <Label>LinkedIn Profile</Label>
                      <Input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>GitHub Profile</Label>
                      <Input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        placeholder="https://github.com/johndoe"
                      />
                    </InputGroup>
                  </InputRow>

                  <InputGroup>
                    <Label>Portfolio / Website</Label>
                    <Input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://johndoe.dev"
                    />
                  </InputGroup>

                  {registrationType === 'team' && (
                    <>
                      <InputRow>
                        <InputGroup>
                          <Label>Team Name *</Label>
                          <Input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            placeholder="Code Warriors"
                            $error={!!errors.teamName}
                          />
                          {errors.teamName && <ErrorText>{errors.teamName}</ErrorText>}
                        </InputGroup>
                        <InputGroup>
                          <Label>Team Size</Label>
                          <Select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                          >
                            <option value="2">2 Members</option>
                            <option value="3">3 Members</option>
                            <option value="4">4 Members</option>
                            <option value="5">5 Members</option>
                          </Select>
                        </InputGroup>
                      </InputRow>

                      <Label>Team Members</Label>
                      {teamMembers.map((member, index) => (
                        <TeamMemberCard
                          key={index}
                          as={motion.div}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <InputRow>
                            <InputGroup>
                              <Input
                                type="text"
                                placeholder="Member Name"
                                value={member.name}
                                onChange={(e) =>
                                  handleTeamMemberChange(index, 'name', e.target.value)
                                }
                                $error={!!errors[`member${index}name`]}
                              />
                            </InputGroup>
                            <InputGroup>
                              <Input
                                type="email"
                                placeholder="Member Email"
                                value={member.email}
                                onChange={(e) =>
                                  handleTeamMemberChange(index, 'email', e.target.value)
                                }
                                $error={!!errors[`member${index}email`]}
                              />
                            </InputGroup>
                            <InputGroup>
                              <Input
                                type="text"
                                placeholder="Role / Skills"
                                value={member.role}
                                onChange={(e) =>
                                  handleTeamMemberChange(index, 'role', e.target.value)
                                }
                              />
                            </InputGroup>
                          </InputRow>
                          {teamMembers.length > 1 && (
                            <RemoveMemberButton
                              type="button"
                              onClick={() => removeTeamMember(index)}
                            >
                              Remove
                            </RemoveMemberButton>
                          )}
                        </TeamMemberCard>
                      ))}
                      {teamMembers.length < 4 && (
                        <AddMemberButton type="button" onClick={addTeamMember}>
                          + Add Team Member
                        </AddMemberButton>
                      )}
                    </>
                  )}
                </>
              )}

              {currentStep === 2 && (
                <>
                  <InputGroup>
                    <Label>Why do you want to join this hackathon? *</Label>
                    <TextArea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      placeholder="Tell us about your motivation and what you hope to build..."
                      rows={4}
                      $error={!!errors.whyJoin}
                    />
                    {errors.whyJoin && <ErrorText>{errors.whyJoin}</ErrorText>}
                  </InputGroup>

                  <InputRow>
                    <InputGroup>
                      <Label>Area of Interest *</Label>
                      <Select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleInputChange}
                        $error={!!errors.areaOfInterest}
                      >
                        <option value="">Select an area</option>
                        {areasOfInterest.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </Select>
                      {errors.areaOfInterest && (
                        <ErrorText>{errors.areaOfInterest}</ErrorText>
                      )}
                    </InputGroup>
                    <InputGroup>
                      <Label>Experience Level *</Label>
                      <Select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        $error={!!errors.experienceLevel}
                      >
                        <option value="">Select your level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </Select>
                      {errors.experienceLevel && (
                        <ErrorText>{errors.experienceLevel}</ErrorText>
                      )}
                    </InputGroup>
                  </InputRow>

                  <InputRow>
                    <InputGroup>
                      <Label>Preferred Track</Label>
                      <Select
                        name="preferredTrack"
                        value={formData.preferredTrack}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a track</option>
                        {tracks.map((track) => (
                          <option key={track} value={track}>
                            {track}
                          </option>
                        ))}
                      </Select>
                    </InputGroup>
                    <InputGroup>
                      <Label>Resume (PDF)</Label>
                      <FileInput
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        id="resume"
                      />
                      <FileLabel htmlFor="resume">
                        {resume ? resume.name : 'Choose file...'}
                      </FileLabel>
                    </InputGroup>
                  </InputRow>

                  <InputGroup>
                    <Label>Dietary Preferences</Label>
                    <Input
                      type="text"
                      name="dietaryPreferences"
                      value={formData.dietaryPreferences}
                      onChange={handleInputChange}
                      placeholder="Vegetarian, Vegan, Gluten-free, etc."
                    />
                  </InputGroup>

                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      name="needAccommodation"
                      checked={formData.needAccommodation}
                      onChange={handleInputChange}
                      id="accommodation"
                    />
                    <CheckboxLabel htmlFor="accommodation">
                      I need accommodation during the event
                    </CheckboxLabel>
                  </CheckboxGroup>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="review-section">
                    <h3>Review Your Information</h3>

                    <div className="review-group">
                      <h4>Basic Information</h4>
                      <p>
                        <strong>Name:</strong> {formData.fullName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>Organization:</strong> {formData.organization}
                      </p>
                      {formData.role && (
                        <p>
                          <strong>Role:</strong> {formData.role}
                        </p>
                      )}
                      {formData.city && (
                        <p>
                          <strong>Location:</strong> {formData.city}
                        </p>
                      )}
                    </div>

                    {registrationType === 'team' && (
                      <div className="review-group">
                        <h4>Team Information</h4>
                        <p>
                          <strong>Team Name:</strong> {formData.teamName}
                        </p>
                        <p>
                          <strong>Team Size:</strong> {formData.teamSize}
                        </p>
                        <p>
                          <strong>Members:</strong>
                        </p>
                        <ul>
                          {teamMembers.map((member, i) => (
                            <li key={i}>
                              {member.name} - {member.email}
                              {member.role && ` (${member.role})`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="review-group">
                      <h4>Hackathon Details</h4>
                      <p>
                        <strong>Interest:</strong> {formData.areaOfInterest}
                      </p>
                      <p>
                        <strong>Experience:</strong> {formData.experienceLevel}
                      </p>
                      {formData.preferredTrack && (
                        <p>
                          <strong>Track:</strong> {formData.preferredTrack}
                        </p>
                      )}
                      {resume && (
                        <p>
                          <strong>Resume:</strong> {resume.name}
                        </p>
                      )}
                      {formData.needAccommodation && (
                        <p>
                          <strong>Accommodation:</strong> Required
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </FormSection>
          </AnimatePresence>

          <div className="button-group">
            {currentStep > 0 && (
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <SubmitButton type="button" onClick={nextStep}>
                Continue
              </SubmitButton>
            ) : (
              <SubmitButton
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </SubmitButton>
            )}
          </div>
        </FormContainer>
      </Inner>
    </Wrapper>
  );
};

export default RegistrationForm;
