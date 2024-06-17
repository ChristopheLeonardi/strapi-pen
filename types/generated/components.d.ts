import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomesCitation extends Schema.Component {
  collectionName: 'components_widget_citations';
  info: {
    displayName: 'citation';
    description: '';
  };
  attributes: {
    citation: Attribute.Text;
    auteur: Attribute.String;
  };
}

export interface AtomesFormContent extends Schema.Component {
  collectionName: 'components_atomes_form_contents';
  info: {
    displayName: 'formContent';
    description: '';
  };
  attributes: {
    nameLabel: Attribute.String;
    messageLabel: Attribute.Text;
    submitLabel: Attribute.String;
    emailLabel: Attribute.String;
  };
}

export interface AtomesHeading extends Schema.Component {
  collectionName: 'components_atomes_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    titre: Attribute.String;
    sousTitre: Attribute.String;
  };
}

export interface AtomesImageandlink extends Schema.Component {
  collectionName: 'components_atomes_image_and_links';
  info: {
    displayName: 'imageAndLink';
  };
  attributes: {
    image: Attribute.Media;
    Lien: Attribute.String;
  };
}

export interface AtomesNumerotation extends Schema.Component {
  collectionName: 'components_widget_numerotations';
  info: {
    displayName: 'numerotation';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    raison: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface AtomesRaison extends Schema.Component {
  collectionName: 'components_widget_raisons';
  info: {
    displayName: 'TexteRepetable';
    description: '';
  };
  attributes: {
    argument: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface AtomesVignette extends Schema.Component {
  collectionName: 'components_atomes_vignettes';
  info: {
    displayName: 'vignette';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    lien: Attribute.String;
    buttonLabel: Attribute.String;
  };
}

export interface MoleculesCitationComponent extends Schema.Component {
  collectionName: 'components_widget_citation_components';
  info: {
    displayName: 'citationComponent';
    description: '';
  };
  attributes: {
    citation: Attribute.Component<'atomes.citation', true>;
    heading: Attribute.Component<'atomes.heading', true>;
  };
}

export interface MoleculesCommentobtenir extends Schema.Component {
  collectionName: 'components_widget_commentobtenirs';
  info: {
    displayName: 'commentobtenir';
    description: '';
  };
  attributes: {
    vignette: Attribute.Component<'atomes.vignette', true>;
    heading: Attribute.Component<'atomes.heading'>;
  };
}

export interface MoleculesContactForm extends Schema.Component {
  collectionName: 'components_widget_contact_forms';
  info: {
    displayName: 'contactForm';
    description: '';
  };
  attributes: {
    successMessage: Attribute.String;
    errorMessage: Attribute.String;
    missingFieldMessage: Attribute.String;
    formContent: Attribute.Component<'atomes.form_content'>;
    heading: Attribute.Component<'atomes.heading', true>;
  };
}

export interface MoleculesPartenariats extends Schema.Component {
  collectionName: 'components_widget_partenariats';
  info: {
    displayName: 'partenariats';
    description: '';
  };
  attributes: {
    imageAndLink: Attribute.Component<'atomes.imageandlink', true>;
    heading: Attribute.Component<'atomes.heading'>;
  };
}

export interface MoleculesPersonnalisation extends Schema.Component {
  collectionName: 'components_widget_personnalisations';
  info: {
    displayName: 'exemplePersonnalisation';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    imageAndLink: Attribute.Component<'atomes.imageandlink', true>;
  };
}

export interface MoleculesPourquoiEf1 extends Schema.Component {
  collectionName: 'components_widget_pourquoi_ef_1s';
  info: {
    displayName: 'pourquoiEF1';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    raison: Attribute.Component<'atomes.raison', true>;
  };
}

export interface MoleculesPrincipe extends Schema.Component {
  collectionName: 'components_widget_principes';
  info: {
    displayName: 'principe';
    description: '';
  };
  attributes: {
    raison: Attribute.Component<'atomes.raison', true>;
    heading: Attribute.Component<'atomes.heading'>;
  };
}

export interface MoleculesSomeActions extends Schema.Component {
  collectionName: 'components_molecules_some_actions';
  info: {
    displayName: 'someActions';
    description: '';
  };
  attributes: {
    titrage: Attribute.Component<'atomes.heading', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atomes.citation': AtomesCitation;
      'atomes.form_content': AtomesFormContent;
      'atomes.heading': AtomesHeading;
      'atomes.imageandlink': AtomesImageandlink;
      'atomes.numerotation': AtomesNumerotation;
      'atomes.raison': AtomesRaison;
      'atomes.vignette': AtomesVignette;
      'molecules.citation-component': MoleculesCitationComponent;
      'molecules.commentobtenir': MoleculesCommentobtenir;
      'molecules.contact-form': MoleculesContactForm;
      'molecules.partenariats': MoleculesPartenariats;
      'molecules.personnalisation': MoleculesPersonnalisation;
      'molecules.pourquoi-ef-1': MoleculesPourquoiEf1;
      'molecules.principe': MoleculesPrincipe;
      'molecules.some-actions': MoleculesSomeActions;
    }
  }
}
