import { Accordion } from "@base-ui/react/accordion";

import rainFocusLogo from "./assets/rf-logo.png";
import summitLogo from "./assets/summit.png";
import summitLogoLarge from "./assets/summit-large.png";
import addCircleIcon from "./assets/add-circle.svg";
import arrowRightIcon from "./assets/arrow.svg";
import computerIcon from "./assets/computer.svg";
import personIcon from "./assets/person.svg";

import "./App.scss";
import { Typography } from "./components/Typography";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="layout container padding-default">
      <div className="aside">
        <section className="base-8">
          <div>
            <img
              src={rainFocusLogo}
              width="32"
              height="32"
              alt="Rain Focus Logo"
            />
          </div>
          <div>
            <img src={summitLogo} width="32" height="32" alt="Summit Logo" />
          </div>
        </section>

        <div className="base-16">
          <Typography as="h2" styleOf="headline-four">
            RainFocus Summit
          </Typography>
          <Typography styleOf="body-xsmall">
            Lehi, UT • December 15th
          </Typography>

          <label htmlFor="search" className="visually-hidden">
            Search
          </label>
          <input id="search" type="text" placeholder="Search" />

          <nav>
            <Accordion.Root className="accordion">
              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger className="accordion-trigger">
                    <span className="accordion-trigger-circle" />
                    Guide
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel />
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger className="accordion-trigger">
                    <span className="accordion-trigger-circle" />
                    Attendees
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="accordion-panel base-8">
                  <Typography styleOf="body-secondary">Attendees</Typography>
                  <Typography styleOf="body-secondary">
                    Attendee type
                  </Typography>
                  <Typography styleOf="body-secondary">Packages</Typography>
                  <Typography styleOf="body-secondary">Reg codes</Typography>
                  <Typography styleOf="body-secondary">Discounts</Typography>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger className="accordion-trigger">
                    <span className="accordion-trigger-circle" />
                    Content
                  </Accordion.Trigger>
                </Accordion.Header>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger className="accordion-trigger">
                    <span className="accordion-trigger-circle" />
                    Exhibitors
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel />
              </Accordion.Item>
            </Accordion.Root>
          </nav>
        </div>
      </div>

      <div className="content base-32">
        <header className="flex">
          <img src={summitLogoLarge} width="95" height="95" alt="Summit Logo" />

          <div className="base-8">
            <Typography as="h1" styleOf="headline-one">
              RainFocus Summit
            </Typography>

            <div className="base-4">
              <Typography styleOf="body-small">December 15th</Typography>
              <Typography styleOf="body-small">Lehi, UT</Typography>
            </div>
          </div>

          <Button className="edit-event-button">Edit Event</Button>
        </header>

        <section className="base-8">
          <Typography as="h2" styleOf="headline-two">
            Event setup guide
          </Typography>
          <Typography>
            See the available list of modules below. We suggest that you start
            with the attendee module.
          </Typography>
        </section>

        <hr className="hr" />

        <section className="base-24">
          <div className="flex">
            <img src={personIcon} width="35" height="35" alt="Attendees" />
            <Typography as="h2" styleOf="headline-two">
              Attendee
            </Typography>
          </div>

          <div className="base-8">
            <Typography as="h2" styleOf="headline-three">
              Step 1:{" "}
              <Typography as="span" styleOf="body-small">
                Base settings.
              </Typography>
            </Typography>

            <div className="card step-one-grid">
              <div className="base-4">
                <Typography as="h3" styleOf="headline-three">
                  General
                </Typography>
                <Typography styleOf="body-xsmall">
                  Define Attendee types & attributes
                </Typography>
              </div>

              <div className="base-4">
                <Typography as="h3" styleOf="headline-three">
                  Title
                </Typography>
                <Typography styleOf="body-xsmall">
                  Description that explains the value goes here. Description
                  that explains the value goes here.{" "}
                </Typography>
              </div>

              <div className="base-4">
                <Typography as="h3" styleOf="headline-three">
                  Title
                </Typography>
                <Typography styleOf="body-xsmall">
                  Description that explains the value goes here. Description
                  that explains the value goes here.
                </Typography>
              </div>
            </div>
          </div>

          <div className="base-8">
            <Typography as="h2" styleOf="headline-three">
              Step 2:{" "}
              <Typography as="span" styleOf="body-small">
                Build registration workflow.
              </Typography>
            </Typography>

            <div className="grid">
              <Card
                icon={arrowRightIcon}
                title="Attendee Registration"
                description="Start by creating a general registration workflow"
                styleOf="headline-three"
              />

              <Card
                icon={arrowRightIcon}
                title="Attendee Registration"
                description="Start by creating a general registration workflow"
                styleOf="headline-three"
              />

              <Card
                icon={arrowRightIcon}
                title="Attendee Registration"
                description="Start by creating a general registration workflow"
                styleOf="headline-three"
              />

              <Card
                icon={addCircleIcon}
                accessibleName="Add Registration Workflow"
                description="Add Registration Workflow"
                styleOf="headline-three"
              />
            </div>
          </div>

          <div className="base-8">
            <Typography as="h3" styleOf="headline-three">
              Step 3:{" "}
              <Typography as="span" styleOf="body-small">
                Design post-registration experiences.
              </Typography>
            </Typography>

            <div className="grid">
              <Card
                icon={computerIcon}
                title="Attendee Portal"
                description="Manage the portal that attendees will see after they’ve register for your event."
                styleOf="headline-three"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
