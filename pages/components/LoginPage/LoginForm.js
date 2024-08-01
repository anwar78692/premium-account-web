import Image from "next/image";
import styled from "styled-components";
import React, { useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Button from "@/pages/customcomponent/Button";
import RememberMe from "@/pages/customcomponent/Checkbox";

const StyledDiv = styled.div`
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  max-width: 400px;
  // margin: 0 auto;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  padding-right: 2.5rem; /* Ensure space for the icon */

  /* Add red border if there's an error */
  ${({ haserror }) =>
    haserror &&
    `
    border-color: red;
  `}

  &:hover {
    border-color: blue;
    outline: none;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;

const TogglePasswordIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  bottom: 50%;
  transform: translateY(-50%, -50%);
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
  // font-size: 0.875rem;
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ForgetPassword = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #563eec;
  cursor: pointer;
  margin-top: 1rem;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  hr {
    flex: 1;
    border: 0;
    border-top: 1px solid #ccc;
  }

  span {
    margin: 0 1rem;
    font-size: 0.875rem;
    color: #888;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { data: session } = useSession();
// console.log(session);
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Email validation
    if (!email) {
      isValid = false;
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      validationErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      isValid = false;
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform login
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <FormContainer>
      <Image src="/assets/image.png" alt="login" width={50} height={50} />

      <StyledDiv>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-lg font-500 mt-2">
          Please Log In to place your order
        </p>
      </StyledDiv>

      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <FormLabel htmlFor="email">
            Email<span className="text-red-500">*</span>
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="Enter your mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            haserror={!!errors.email}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </div>

        <PasswordContainer>
          <FormLabel htmlFor="password">
            Password<span className="text-red-500">*</span>
          </FormLabel>

          <FormInput
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            haserror={!!errors.password}
          />
          <TogglePasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePasswordIcon>
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </PasswordContainer>

        <RememberMeContainer>
          <RememberMe label="Remember me" />
          <ForgetPassword>Forgot password?</ForgetPassword>
        </RememberMeContainer>

        <Button variant="primary" size="small" className="w-[100%] mt-[20px]">
          Log In
        </Button>
        <Separator>
          <hr />
          <span className="font-semibold">Or</span>
          <hr />
        </Separator>
      </form>
      <Button
        variant="secondary"
        size="small"
        onClick={() => signIn('google')}
        className="w-[100%]"
      >
        <FaGoogle className="icon" />
        Sign in with Google
      </Button>
    </FormContainer>
  );
}

export default LoginForm;
