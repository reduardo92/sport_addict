import styled from 'styled-components';

interface FormSectionProps {
  log?: boolean;
}

const FormSectionStyles = styled.section<FormSectionProps>`
  color: var(--clr-second);
  flex: 1;
  padding: 2em 0;

  .side--content {
    display: none;
  }

  .side--content,
  .form--content {
    overflow: hidden;
    padding: 0 1em;
    position: relative;
    z-index: 1;
  }

  .video--bg {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    width: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .benefits {
    margin: 3em 0em 3em 1em;

    &__tab {
      margin-bottom: 1em;
    }
  }

  .header {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .signIn--form {
    .btn {
      background: var(--clr-primary);
      border-color: var(--clr-primary);

      &:hover,
      &:focus {
        transform: scale(0.9);
        opacity: 0.8;
        background: var(--clr-primary);
        border-color: var(--clr-primary);
      }
    }
  }

  /* Icons */
  .control {
    .icon {
      height: 100%;
      width: 1rem;
    }

    .is-left {
      left: 10px !important;
    }
    .is-right {
      right: 10px !important;
    }
  }

  .cancel {
    color: var(--clr-primary);
    margin-left: 1em;
    border-bottom: 1px solid transparent;
    transition: var(--ease-12s);

    &:hover,
    &:focus {
      opacity: 0.8;
      border-bottom-color: var(--clr-primary);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    padding: 0;

    .side--content,
    .form--content {
      display: flex;
      flex: 1;
      align-items: center;
      padding: 2em 1em;
    }

    .form--content {
      padding-bottom: 4em;
      .inner {
        flex: 1;
        max-width: 600px;
      }
    }

    .side--content {
      justify-content: center;
      color: var(--clr-white);
      background-color: black;

      &__inner {
        padding-bottom: 8em;
        ${({ log }) => log && 'padding: 2.2em 0 0'}
      }

      .video--bg {
        display: block;
      }
    }

    .signIn--form {
      .form-group {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1050px) {
    .inner {
      margin: 0 auto 0 calc(100% - 90%);
    }
  }
`;

export default FormSectionStyles;
