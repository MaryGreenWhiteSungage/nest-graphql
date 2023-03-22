/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

/** ApplicationString */
export type ApplicationString = {
  __typename?: 'ApplicationString';
  applicationStringType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  /** Unique Identifier */
  id: Scalars['ID'];
  key: Scalars['String'];
  modifiedDate?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type CreateApplicationStringInput = {
  applicationStringType: Scalars['String'];
  createdDate?: InputMaybe<Scalars['DateTime']>;
  key: Scalars['String'];
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ApplicationStringDelete: ApplicationString;
  CreateApplicationString: ApplicationString;
  Seed: Scalars['Boolean'];
  UpdateApplicationString: ApplicationString;
};

export type MutationApplicationStringDeleteArgs = {
  id: Scalars['Float'];
};

export type MutationCreateApplicationStringArgs = {
  ApplicationStringCreateInput: CreateApplicationStringInput;
};

export type MutationUpdateApplicationStringArgs = {
  id: Scalars['Float'];
  updateApplicationStringInput: UpdateApplicationStringInput;
};

export type Query = {
  __typename?: 'Query';
  ApplicationString: Array<ApplicationString>;
  ApplicationStringFindOne: ApplicationString;
};

export type QueryApplicationStringFindOneArgs = {
  key: Scalars['String'];
};

export type UpdateApplicationStringInput = {
  applicationStringType?: InputMaybe<Scalars['String']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  key?: InputMaybe<Scalars['String']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['String']>;
};
